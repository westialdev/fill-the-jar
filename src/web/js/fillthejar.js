'use strict';

const {BrowserWater} = require("../../core/water/browserwater");
const {Water} = require("../../core/water/water");
const {TurnOnWater} = require("../../core/turnonwater");

const browserWater = BrowserWater(
    "..",
    () => document.getElementById("filling").style.display = "block",
);

window.turnOn = TurnOnWater(Water(browserWater));
