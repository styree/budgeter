// import Express from 'express';
const express = require('express');
const doSomething = require('./sheetService');

const app = express();

app.listen('3000');

console.log('Listening on port 3000');

module.exports = app;

app.get('/', (req, res) => {
	doSomething();
	res.send('hi hi hi');
});
