'use strict';

exports.WatchWater = function create(water) {
    return async () => {
        if (water.isFalling() && water.isMaxGot()) water.turnOff();
    };
};