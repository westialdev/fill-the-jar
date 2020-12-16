'use strict';
const {describe, it, beforeEach} = require("mocha");
const assert = require("assert");
const sinon = require("sinon");

describe("Turn on the tap when I click on the button", function (){
    it("makes water falling into the jar", function () {
        const button = sinon.fake();
        button.onClick = sinon.fake();
        button.click = sinon.fake();
        const water = sinon.fake();
        water.isFalling = sinon.stub(() => true);

        button.onClick();
        button.click();
        assert.strictEqual(water.isFalling(), true);
    });
});