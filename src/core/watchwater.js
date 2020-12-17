'use strict';

exports.WatchWater = function create(water, maxSensor) {
    return async () => {
        if (water.isFalling() && maxSensor.isOn()) water.turnOff();
    };
};