'use strict';
const {browserWaterEngine} = require("./engine");
const {Water} = require("../../core/water/water");
const {TurnOnWater} = require("../../core/turnonwater");

setInterval(browserWaterEngine.isFalling, 1000);

window.turnOn = TurnOnWater(
    Water(browserWaterEngine),
    browserWaterEngine.getSensorMirror()
);
