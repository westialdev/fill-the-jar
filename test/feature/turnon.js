'use strict';
const {describe, it, beforeEach} = require("mocha");
const assert = require("assert");
const sinon = require("sinon");

describe("Turn on the tap when I click on the button", function (){
    it("makes water falling into the jar", function () {

        const Water = function create() {
            const isFalling = () => {throw new Error("Not implemented")};
            const fall = () => {throw new Error("Not implemented")};
            return {
                fall,
                isFalling
            };
        };

        const water = Water();
        water.fall = sinon.spy();
        water.isFalling = sinon.stub(() => true);

        const button = sinon.fake();
        button.onClick = sinon.stub((action) => action());
        button.click = sinon.fake();

        button.onClick(water.fall);
        button.click();
        assert.strictEqual(water.isFalling(), true);
        assert.strictEqual(water.fall.calledOnce, true);
    });
});