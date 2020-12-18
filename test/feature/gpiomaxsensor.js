'use strict';
const {describe, it, beforeEach} = require("mocha");
const assert = require("assert");
const sinon = require("sinon");
const {GpioMaxSensor} = require("../../src/core/water/gpiomaxsensor");

describe("GPIO maximum level sensor", function () {
    it("returns true when pin is high", function () {
        const isPinHighFn = sinon.stub(() => true);
        const sensor = GpioMaxSensor(isPinHighFn);
        assert.strictEqual(sensor.isOn(), true);
    });
    it("returns false when pin is not high", function () {
        const isPinHighFn = sinon.stub(() => false);
        const sensor = GpioMaxSensor(isPinHighFn);
        assert.strictEqual(sensor.isOn(), false);
    });
    it("calls pin to ask if it is high", function () {
        const isPinHighFn = sinon.spy();
        const sensor = GpioMaxSensor(isPinHighFn);
        sensor.isOn();
        assert.ok(isPinHighFn.calledOnce);
    });
});