'use strict';
const {describe, it, beforeEach} = require("mocha");
const assert = require("assert");
const sinon = require("sinon");
const {GpioMaxSensor} = require("../../src/core/water/gpiomaxsensor");

describe("GPIO maximum level sensor", function () {
    it("returns true when pin is high", async function () {
        const isPinHighFn = sinon.stub(async () => true);
        const sensor = GpioMaxSensor(isPinHighFn);
        assert.strictEqual(await sensor.isOn(), true);
    });
    it("returns false when pin is not high", async function () {
        const isPinHighFn = sinon.stub(async () => false);
        const sensor = GpioMaxSensor(isPinHighFn);
        assert.strictEqual(await sensor.isOn(), false);
    });
    it("calls pin to ask if it is high", async function () {
        const isPinHighFn = sinon.spy();
        const sensor = GpioMaxSensor(isPinHighFn);
        await sensor.isOn();
        assert.ok(isPinHighFn.calledOnce);
    });
});