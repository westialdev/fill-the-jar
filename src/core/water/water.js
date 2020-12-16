'use strict';

exports.Water = function create() {
    const isFalling = () => {throw new Error("Not implemented")};
    const fall = () => {throw new Error("Not implemented")};
    return {
        fall,
        isFalling
    };
};