'use strict';

exports.StateOnlyWater = function create() {
    let falling = false;
    const isFalling = () => falling;
    const turnOn = () => falling = true;
    const turnOff = () => falling = false;
    return {
        turnOn,
        turnOff,
        isFalling,
    };
};