const express = require('express');
const sheetService = require('./sheetService');

const app = express();

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
