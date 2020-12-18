'use strict';

exports.GpioMaxSensor = function create(isPinHighFn) {
    const isOn = () => isPinHighFn();
    return {
        isOn
    }
}