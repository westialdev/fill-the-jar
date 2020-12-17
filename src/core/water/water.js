'use strict';

exports.Water = function create(implementation) {
    const isFalling = () => {throw new Error("Not implemented")};
    const turnOn = () => {throw new Error("Not implemented")};
    const turnOff = () => {throw new Error("Not implemented")};
    const isMaxGot = () => {throw new Error("Not implemented")};
    return {
        turnOn,
        turnOff,
        isFalling,
        isMaxGot,
        ...implementation
    };
};