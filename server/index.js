const express = require('express');
const sheetService = require('./sheetService');
const bodyParser = require('body-parser');

const app = express();

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use(bodyParser.json());

app.listen('3000');

console.log('Listening on port 3000');

module.exports = app;

app.get('/', (req, res) => {
	sheetService
		.getRows()
		.then((rows) => {
			res.send(rows);
		});
});

app.post('/log', (req, res) => {
	sheetService
		.addRow(req.body)
		.then((rows) => {
			res.send(200);
		});
});
