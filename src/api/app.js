'use strict';

const express = require('express')
const {StateOnlyWater} = require("../core/water/stateonlywater");
const {TurnOnWater} = require("../core/turnonwater");
const {Water} = require("../core/water/water");
const app = express()
const port = 3000

app.use('/web', express.static('src/web'));

const water = Water(StateOnlyWater());
const turnOn = TurnOnWater(water);

const __response = (res, body = {}, status = 200) =>
    res.status(status).send(body);

app.post('/api/on', async (req, res) => {
    await turnOn();
    __response(res, {turnedOn: water.isFalling()});
});

app.listen(port, () => {
    console.log(`Fill the water app listening at http://localhost:${port}`)
});