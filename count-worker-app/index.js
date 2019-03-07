"use strict";

const express = require("express");
const app = express();

app.listen(5000);
console.log("Start server OK");

app.get('/plus', (request, response) => {
    const dictionary = request.query;
    const a = dictionary['a'];
    const b = dictionary['b'];
    const c = parseInt(a) + parseInt(b);
    response.end("Plus result: " + c);
});

app.get('/minus', (request, response) => {
    const dictionary = request.query;
    const a = dictionary['a'];
    const b = dictionary['b'];
    const c = parseInt(a) - parseInt(b);
    response.end("Minus result: " + c);
});

