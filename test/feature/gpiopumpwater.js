'use strict';
const {describe, it, beforeEach} = require("mocha");
const assert = require("assert");
const sinon = require("sinon");
const {GpioPumpWater} = require("../../src/core/water/gpiopumpwater");

describe("GPIO Pump water", function (){
    let highOutputPinFn;
    let lowOutputPinFn;
    let pumpWater;

    beforeEach(() => {
        highOutputPinFn = sinon.spy();
        lowOutputPinFn = sinon.spy();
        pumpWater = GpioPumpWater(highOutputPinFn, lowOutputPinFn);
    });

    it("sets low the pin on init", function () {
        assert.ok(!highOutputPinFn.calledOnce);
        assert.ok(lowOutputPinFn.calledOnce);
    });
    it("sets high the pin on turning on", function () {
        pumpWater.turnOn();
        assert.ok(highOutputPinFn.calledOnce);
    });
    it("makes water falling on turning on", function () {
        pumpWater.turnOn();
        assert.strictEqual(pumpWater.isFalling(), true);
    });
    it("does not make water falling on turning off", function () {
        pumpWater.turnOn();
        pumpWater.turnOff();
        assert.strictEqual(pumpWater.isFalling(), false);
    });
    it("does not make water falling on init", function () {
        assert.strictEqual(pumpWater.isFalling(), false);
    });
    it("sets low the pin on turning off", function () {
        pumpWater.turnOn();
        pumpWater.turnOff();
        assert.ok(lowOutputPinFn.calledTwice);
    });
});