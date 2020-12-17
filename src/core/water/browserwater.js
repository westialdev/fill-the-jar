'use strict';

const axios = require("axios");

exports.BrowserWater = function create(rootUrl, displayTurnOn) {
    const __httpError = (response) => console.debug(`HTTP Error: ${JSON.stringify(response)}`);
    const __processFalling = (response) => {
        if (response.hasOwnProperty("data") && true === response.data.turnedOn) {
            displayTurnOn();
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

    return {
        turnOn,
        isFalling
    };
}