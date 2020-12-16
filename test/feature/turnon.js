'use strict';
const {describe, it, beforeEach} = require("mocha");
const assert = require("assert");
const sinon = require("sinon");

describe("Turn on the tap when I click on the button", function (){
    it("makes water falling into the jar", function () {
        const water = sinon.fake();
        water.fall = sinon.spy();

        const button = sinon.fake();
        button.onClick = sinon.stub((action) => action());
        button.click = sinon.fake();
        water.isFalling = sinon.stub(() => true);

        button.onClick(water.fall);
        button.click();
        assert.strictEqual(water.isFalling(), true);
        assert.strictEqual(water.fall.calledOnce, true);
    });
});