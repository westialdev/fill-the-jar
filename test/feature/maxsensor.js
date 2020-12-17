'use strict';
const {describe, it, beforeEach} = require("mocha");
const assert = require("assert");
const sinon = require("sinon");
const {TimeoutMaxSensor} = require("../../src/core/water/timeoutmaxsensor");
const {MaxSensor} = require("../../src/core/water/maxsensor");

describe("Max sensor", function (){
    describe("TimeoutMaxSensor", function () {
        it("is on when water reaches the maximum level", function () {
            const sensorImpl = TimeoutMaxSensor(-1);
            sensorImpl.waterTurnedOn();
            const sensor = MaxSensor(sensorImpl);
            assert.strictEqual(sensor.isOn(), true);
        });
        it("is off when water does not fall", function () {
            const sensorImpl = TimeoutMaxSensor(-1);
            const sensor = MaxSensor(sensorImpl);
            assert.strictEqual(sensor.isOn(), false);
        });
        it("is off when water does reach the maximum level", function () {
            const sensorImpl = TimeoutMaxSensor(-1);
            const sensor = MaxSensor(sensorImpl);
            assert.strictEqual(sensor.isOn(), false);
        });
    });
});