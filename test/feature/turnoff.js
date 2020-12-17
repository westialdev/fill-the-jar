'use strict';

const {describe, it, beforeEach} = require("mocha");
const assert = require("assert");
const sinon = require("sinon");
const {MaxSensor} = require("../../src/core/water/maxsensor");
const {WatchWater} = require("../../src/core/watchwater");
const {Water} = require("../../src/core/water/water");


describe("Turn off when the water reaches the maximum of the jar", function (){
    const water = Water();
    const sensor = MaxSensor();

    beforeEach(() => {
        water.turnOn = sinon.spy(() => water.isFalling = sinon.stub(() => true));
        water.turnOff = sinon.spy(() => water.isFalling = sinon.stub(() => false));
        water.isFalling = sinon.stub(() => false);
    });

    it("cuts water if maximum level sensor is on", function () {
        sensor.isOn = sinon.spy(() => true);
        water.turnOn();

        const watchWater = WatchWater(water, sensor);
        watchWater();

        assert.strictEqual(water.isFalling(), false);
        assert.ok(sensor.isOn.calledOnce);
    });

    it("allows water falling if maximum level sensor is not on", function () {
        sensor.isOn = sinon.spy(() => false);
        water.turnOn();

        const watchWater = WatchWater(water, sensor);
        watchWater();

        assert.strictEqual(water.isFalling(), true);
        assert.ok(sensor.isOn.calledOnce);
    });

    it("does nothing if water is not falling", function () {
        sensor.isOn = sinon.spy(() => false);

        const watchWater = WatchWater(water, sensor);
        watchWater();

        assert.strictEqual(water.isFalling(), false);
        assert.ok(!sensor.isOn.calledOnce);
    });
});