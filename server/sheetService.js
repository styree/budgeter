const GoogleSpreadsheet = require('google-spreadsheet');
const config = require('../config');
const creds = require('../config/google-generated-creds.json');

const doc = new GoogleSpreadsheet(config.spreadsheetId);

const getRows = () => {
	return new Promise((resolve, reject) => {
		return doc.useServiceAccountAuth(creds, error => {
			if (error) reject(error);
			return doc.getRows(1, (error, rows) => {
				if (error) reject(error);
				resolve(rows);
			});
		});
	});
};

const addRow = (data) => {
	return new Promise((resolve, reject) => {
		return doc.useServiceAccountAuth(creds, error => {
			if (error) reject(error);
			return doc.addRow(1, data, (error, rows) => {
				if (error) reject(error);
				resolve(rows);
			});
		});
	});
};

module.exports = {
	getRows: getRows,
	addRow: addRow
};
