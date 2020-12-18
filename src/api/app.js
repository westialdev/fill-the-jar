'use strict';

const express = require('express')
const {RpiFactory} = require("../rpi/rpifactory");
const {TimeoutMaxSensor} = require("../core/water/timeoutmaxsensor");
const {MaxSensor} = require("../core/water/maxsensor");
const {WatchWater} = require("../core/watchwater");
const {TurnOnWater} = require("../core/turnonwater");
const {Water} = require("../core/water/water");
const app = express()
const port = 3000

const buzzerPin = 15;
const ledPin = 7;
const pumpPin = 10;

const rpiFactory = RpiFactory(pumpPin, ledPin, buzzerPin);
const rpiWater = rpiFactory.createWater();
const water = Water(rpiWater);
const sensor = MaxSensor(TimeoutMaxSensor(5));
const turnOn = TurnOnWater(water, sensor);
const watchWater = WatchWater(water, sensor);

const __response = (res, body = {}, status = 200) =>
    res.status(status).send(body);

app.use('/web', express.static('src/web'));

app.post('/api/on', async (req, res) => {
    await turnOn();
    sensor.waterTurnedOn();
    __response(res, {}, 204);
});

app.get('/api/on', async (req, res) => {
    __response(res, {turnedOn: water.isFalling(), gotMax: sensor.isOn()});
});

const startServer = () => app.listen(port, () => {
    console.log(`Fill the water app listening at http://localhost:${port}`)
});

// Entry point
startServer();
setInterval(watchWater, 1000);