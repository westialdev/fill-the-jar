'use strict';

const axios = require("axios");

exports.BrowserWater = function create(rootUrl, displayTurnOn) {
    const __httpError = (response) => console.debug(`HTTP Error: ${JSON.stringify(response)}`);

    const turnOn = async () => {
        const response = await axios({method: 'post', url: `${rootUrl}/api/on/`});
        if (response.hasOwnProperty("data") && true === response.data.turnedOn) {
            displayTurnOn();
        } else __httpError(response);
    }

    return {
        turnOn,
    };
}