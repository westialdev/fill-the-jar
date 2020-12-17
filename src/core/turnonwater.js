'use strict';

exports.TurnOnWater = function create(water) {
    return async () => {
        water.turnOn();
    };
};
