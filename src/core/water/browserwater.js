'use strict';

const axios = require("axios");

exports.BrowserWater = function create(rootUrl, displayTurnOn, displayGotMax) {
    let gotMax = false;
    const __httpError = (response) => console.debug(`HTTP Error: ${JSON.stringify(response)}`);
    const __processFalling = (response) => {
        if (response.status < 400) {
            if (true === response.data.turnedOn) displayTurnOn();
            if (true === response.data.gotMax) {
                gotMax = true;
                displayGotMax();
            } else gotMax = false;
        } else __httpError(response);
    };
    const isFalling = async () => {
        const response = await axios({method: 'get', url: `${rootUrl}/api/on/`});
        __processFalling(response);
    }
    const turnOn = async () => {
        const response = await axios({method: 'post', url: `${rootUrl}/api/on/`});
        __processFalling(response);
    }
    const turnOff = displayGotMax;

    const getSensorMirror = () => {
        return {
            isOn: () => gotMax
        }
    };

    return {
        turnOn,
        turnOff,
        isFalling,
        getSensorMirror
    };
}