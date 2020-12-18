'use strict';

exports.GpioMaxSensor = function create(isPinHighFn) {
    const isOn = async () => await isPinHighFn();
    return {
        isOn
    }
}