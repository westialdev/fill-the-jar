'use strict';

const {describe, it, beforeEach} = require("mocha");
const assert = require("assert");
const sinon = require("sinon");
const {WatchWater} = require("../../src/core/watchwater");
const {Water} = require("../../src/core/water/water");


describe("Turn off when the water reaches the maximum of the jar", function (){
    const water = Water();

    beforeEach(() => {
        water.turnOn = sinon.spy(() => water.isFalling = sinon.stub(() => true));
        water.turnOff = sinon.spy(() => water.isFalling = sinon.stub(() => false));
        water.isFalling = sinon.stub(() => false);
    });

    it("cuts water if maximum level is got", function () {
        water.isMaxGot = sinon.stub(() => true);
        water.turnOn();

        const watchWater = WatchWater(water);
        watchWater();

        assert.strictEqual(water.isFalling(), false);
    });

    it("does nothing if water is already off", function () {
        water.isMaxGot = sinon.stub(() => false);

        const watchWater = WatchWater(water);
        watchWater();

        assert.strictEqual(water.isFalling(), false);
    });
});