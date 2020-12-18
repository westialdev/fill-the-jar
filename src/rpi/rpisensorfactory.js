'use strict';
const gpio = require('rpi-gpio');
const {GpioMaxSensor} = require("../core/water/gpiomaxsensor");

exports.RpiSensorFactory = (sensorPin) => {
    gpio.setup(sensorPin, gpio.DIR_IN);
    console.log("Raspberry Pi Sensor GPIO is ready");

    let pinIsHigh = false;

    const isPinHigh = (pin) => {
        gpio.read(pin, function(err, value) {
            if (err) throw err;
            pinIsHigh = value;
        });
        return pinIsHigh;
    };

    const createSensor = () => {
        return GpioMaxSensor(() => isPinHigh(sensorPin));
    };

    return {
        createSensor
    };
};