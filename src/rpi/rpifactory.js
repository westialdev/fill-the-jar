'use strict';
const gpio = require('rpi-gpio');
const {GpioPumpWater} = require("../core/water/gpiopumpwater");

exports.RpiFactory = (pumpPin, ledPin, buzzerPin) => {
    gpio.setup(pumpPin, gpio.DIR_LOW);
    gpio.setup(ledPin, gpio.DIR_LOW);
    gpio.setup(buzzerPin, gpio.DIR_LOW);
    console.log("Raspberry Pi GPIO is ready")

    const __pumpOn = () => {
        gpio.write(pumpPin, true);
    };
    const __pumpOff = () => {
        gpio.write(pumpPin, false);
    };
    const __ledOn = () => {
        gpio.write(ledPin, true);
    };
    const __ledOff = () => {
        gpio.write(ledPin, false);
    };

    let buzzerInterval;
    let buzzerState = false;
    const __buzz = () => {
        buzzerState = !buzzerState;
        gpio.write(buzzerPin, buzzerState);
    };
    const __buzzerOn = () => {
        buzzerInterval = setInterval(__buzz, 1000);
    };
    const __buzzerOff = () => {
        if ("undefined" !== typeof buzzerInterval) clearInterval(buzzerInterval);
        gpio.write(buzzerPin, false);
    };

    const createWater = () => {
        let firstCall = true;
        return GpioPumpWater(
            () => {
                __buzzerOn();
                __ledOn();
                __pumpOn();
            },
            () => {
                /*
                FIXME Tricky block.
                I get the following error only at the first GPIO Pump Water init
                call if there is not try block. It is safe because the pins are
                initiated as DIR_LOW, although the following if block is ugly.
                 */
                if (firstCall) {
                    try {
                        __buzzerOff();
                        __ledOff();
                        __pumpOff();
                    } catch (e) {
                        console.error(e);
                    }
                    firstCall = false;
                } else {
                    __buzzerOff();
                    __ledOff();
                    __pumpOff();
                }
            }
        );
    };

    return {
        createWater
    };
};