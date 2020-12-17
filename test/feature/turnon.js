'use strict';
const {describe, it, beforeEach} = require("mocha");
const assert = require("assert");
const sinon = require("sinon");
const {TurnOnWater} = require("../../src/core/turnonwater");
const {Water} = require("../../src/core/water/water");
const {Button} = require("../../src/core/button/button");

describe("Turn on the tap when I click on the button", function (){
    const water = Water();
    const button = Button();

    beforeEach(() => {
        water.turnOn = sinon.spy(() => water.isFalling = sinon.stub(() => true));
        water.isFalling = sinon.stub(() => false);
    });

    it("makes water falling into the jar", function () {
        const sensor = sinon.fake();
        sensor.isOn = sinon.stub(() => false);
        const turnOn = TurnOnWater(water, sensor);
        button.onClick(turnOn);
        button.click();
        assert.strictEqual(water.isFalling(), true);
        assert.strictEqual(water.turnOn.calledOnce, true);
    });

    it("makes no falling water if button has not been clicked", function () {
        const sensor = sinon.fake();
        sensor.isOn = sinon.stub(() => false);
        const turnOn = TurnOnWater(water, sensor);
        button.onClick(turnOn);
        assert.strictEqual(water.isFalling(), false);
        assert.strictEqual(water.turnOn.calledOnce, false);
    });
    it("makes no falling water if water is at maximum level", function () {
        const sensor = sinon.fake();
        sensor.isOn = sinon.spy(() => true);
        const turnOn = TurnOnWater(water, sensor);
        button.onClick(turnOn);
        button.click();
        assert.strictEqual(water.isFalling(), false);
        assert.strictEqual(water.turnOn.calledOnce, false);
        assert.strictEqual(sensor.isOn.calledOnce, true);
    });
});