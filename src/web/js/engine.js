'use strict';

const {BrowserWater} = require("../../core/water/browserwater");

exports.browserWaterEngine = BrowserWater(
    "..",
    () => {
        document.getElementById("filling").style.display = "block";
        document.getElementById("open-tap").style.display = "none";
    },
    () => {
        document.getElementById("filling").style.display = "none";
        document.getElementById("full").style.display = "block";
    },
);
