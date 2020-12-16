'use strict';
const {describe, it, beforeEach} = require("mocha");
const assert = require("assert");
const sinon = require("sinon");
const {Water} = require("../../src/core/water/water");
const {Button} = require("../../src/core/button/button");

describe("Turn on the tap when I click on the button", function (){
    const water = Water();
    const button = Button();

    beforeEach(() => {
        water.fall = sinon.spy(() => water.isFalling = sinon.stub(() => true));
        water.isFalling = sinon.stub(() => false);
        button.onClick(water.fall);
    });

    it("makes water falling into the jar", function () {
        button.click();
        assert.strictEqual(water.isFalling(), true);
        assert.strictEqual(water.fall.calledOnce, true);
    });

    it("makes no falling water if button has not been clicked", function () {
        assert.strictEqual(water.isFalling(), false);
        assert.strictEqual(water.fall.calledOnce, false);
    });
});