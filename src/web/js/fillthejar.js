'use strict';

const {WatchWater} = require("../../core/watchwater");
const {Water} = require("../../core/water/water");
const {TurnOnWater} = require("../../core/turnonwater");

const BrowserWater = function create(secondsFalling, displayFallFn, displayGotMaxFn) {
    let falling = false;
    let turnedOnAt;
    const __now = () => Math. round((new Date()). getTime() / 1000);

    const isFalling = () => falling;
    const turnOn = () => {
        displayFallFn();
        turnedOnAt = __now();
        falling = true;
    };
    const turnOff = () => {
        displayGotMaxFn();
        falling = false;
    };
    const isMaxGot = () => {
        return __now() - secondsFalling > turnedOnAt;
    };

    return {
        turnOn,
        turnOff,
        isFalling,
        isMaxGot,
    };
}
const browserWater = BrowserWater(
    5,
    () => document.getElementById("filling").style.display = "block",
    () => {
        document.getElementById("filling").style.display = "none";
        document.getElementById("full").style.display = "block";
    },
);

window.turnOn = TurnOnWater(Water(browserWater));
window.watchWater = WatchWater(Water(browserWater));
