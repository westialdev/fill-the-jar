'use strict';

const express = require('express')
const {buzzerPin} = require("../config");
const {ledPin} = require("../config");
const {pumpPin} = require("../config");
const {maxSensorPin} = require("../config");
const {serverPort} = require("../config");
const {RpiSensorFactory} = require("../rpi/rpisensorfactory");
const {RpiWaterFactory} = require("../rpi/rpiwaterfactory");
const {MaxSensor} = require("../core/water/maxsensor");
const {WatchWater} = require("../core/watchwater");
const {TurnOnWater} = require("../core/turnonwater");
const {Water} = require("../core/water/water");
const app = express()

const rpiSensorFactory = RpiSensorFactory(maxSensorPin);
const rpiMaxSensor = rpiSensorFactory.createSensor();
const rpiWaterFactory = RpiWaterFactory(pumpPin, ledPin, buzzerPin);
const rpiWater = rpiWaterFactory.createWater();
const water = Water(rpiWater);
const sensor = MaxSensor(rpiMaxSensor);
const turnOn = TurnOnWater(water, sensor);
const watchWater = WatchWater(water, sensor);

const __response = (res, body = {}, status = 200) =>
    res.status(status).send(body);

app.use('/web', express.static('src/web'));

app.post('/api/on', async (req, res) => {
    await turnOn();
    __response(res, {}, 204);
});

app.get('/api/on', async (req, res) => {
    __response(res, {turnedOn: water.isFalling(), gotMax: sensor.isOn()});
});

const startServer = () => app.listen(serverPort, () => {
    console.log(`Fill the water app listening at http://localhost:${serverPort}`)
});

// Entry point
startServer();
setInterval(watchWater, 1000);