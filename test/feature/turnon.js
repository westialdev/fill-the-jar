'use strict';
const {describe, it, beforeEach} = require("mocha");
const assert = require("assert");
const sinon = require("sinon");
const {Water} = require("../../src/core/water/water");
const {Button} = require("../../src/core/button/button");

describe("Turn on the tap when I click on the button", function (){
    it("makes water falling into the jar", function () {
        const water = Water();
        water.fall = sinon.spy();
        water.isFalling = sinon.stub(() => true);

        const button = Button();

        button.onClick(water.fall);
        button.click();
        assert.strictEqual(water.isFalling(), true);
        assert.strictEqual(water.fall.calledOnce, true);
    });
});