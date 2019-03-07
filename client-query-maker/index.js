"use strict";

const express = require("express");
const app = express();

app.listen(5000);
console.log("Start server OK");

const request = require("request");

const headers = {};
headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
headers["Connection"] = "close";

function sendQuery(url, callback) {
    request.get({
        url: url,
        body: null,
        headers: headers,
    }, function (error, response, body) {
        if(error) {
            callback(null);
        } else {
            callback(body);
        }
    });
}

app.get('/get', (request, response) => {
    const dictionary = request.query;

    const a = dictionary['a'];
    const b = dictionary['b'];
    const operation = dictionary['operation'];

    let url = undefined;

    if(operation === "p") {
        url = "http://count_worker_app:5000/plus?a=" + a + "&b=" + b;
    } else {
        url = "http://count_worker_app:5000/minus?a=" + a + "&b=" + b;
    }

    sendQuery(url, (answer) => {
        if(answer === null) {
            response.end("Answer: error");
        } else {
            response.end("Answer: " + answer);
        }
    });
});

