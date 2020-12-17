'use strict';

const express = require('express')
const {TimeoutMaxSensor} = require("../core/water/timeoutmaxsensor");
const {MaxSensor} = require("../core/water/maxsensor");
const {WatchWater} = require("../core/watchwater");
const {StateOnlyWater} = require("../core/water/stateonlywater");
const {TurnOnWater} = require("../core/turnonwater");
const {Water} = require("../core/water/water");
const app = express()
const port = 3000

app.use('/web', express.static('src/web'));

const water = Water(StateOnlyWater());
const sensor = MaxSensor(TimeoutMaxSensor(10));
const turnOn = TurnOnWater(water, sensor);
const watchWater = WatchWater(water, sensor);

setInterval(watchWater, 1000);

const __response = (res, body = {}, status = 200) =>
    res.status(status).send(body);

app.post('/api/on', async (req, res) => {
    await turnOn();
    sensor.waterTurnedOn();
    __response(res, {}, 204);
});

app.get('/api/on', async (req, res) => {
    __response(res, {turnedOn: water.isFalling(), gotMax: sensor.isOn()});
});

app.listen(port, () => {
    console.log(`Fill the water app listening at http://localhost:${port}`)
});