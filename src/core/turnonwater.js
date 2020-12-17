'use strict';

exports.TurnOnWater = function create(water, maxSensor) {
    return async () => {
        if (!maxSensor.isOn()) water.turnOn();
    };
};
