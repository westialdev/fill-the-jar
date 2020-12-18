'use strict';

exports.GpioPumpWater = function create(highOutputPinFn, lowOutputPinFn) {
    let falling;

    const __init = () => {
        lowOutputPinFn();
        falling = false;
    };
    __init();

    const isFalling = () => falling;
    const turnOn = () => {
        highOutputPinFn();
        falling = true;
    };
    const turnOff = () => {
        lowOutputPinFn();
        falling = false;
    };
    return {
        turnOn,
        turnOff,
        isFalling,
    };
};
