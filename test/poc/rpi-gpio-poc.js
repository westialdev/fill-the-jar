'use strict';
const gpio = require('rpi-gpio');

gpio.setup(10, gpio.DIR_OUT);
gpio.setup(7, gpio.DIR_OUT);
gpio.setup(37, gpio.DIR_IN);

function loop () {
    gpio.read(37, function(err, value) {
        if (err) throw err;
        gpio.write(7, value);
        gpio.write(10, value);
    });
}

setInterval(loop, 1000);