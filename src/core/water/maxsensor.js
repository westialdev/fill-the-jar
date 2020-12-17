'use strict';

exports.MaxSensor = function create(implementation) {
    const isOn = () => {throw new Error("Not implemented")};
    return {
        isOn,
        ...implementation
    }
}