'use strict';

exports.TimeoutMaxSensor = function create(secondsFalling) {
    let turnedOnAt;
    const waterTurnedOn = () => turnedOnAt = __now();
    const __now = () => Math. round((new Date()). getTime() / 1000);

    const isOn = () => "undefined" === typeof turnedOnAt
        ? false
        : __now() - secondsFalling > turnedOnAt;
    return {
        isOn,
        waterTurnedOn
    }
};