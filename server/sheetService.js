const GoogleSpreadsheet = require('google-spreadsheet');
const config = require('../config');
const creds = require('../config/google-generated-creds.json');

const doc = new GoogleSpreadsheet(config.spreadsheetId);

const getRows = () => {
	return new Promise((resolve, reject) => {
		return doc.useServiceAccountAuth(creds, error => {
			if (error) reject(error);
			return doc.getRows(1, (error, rows) => {
				if (error) throw error;
				console.log('rows', rows);
				resolve(rows);
			});
		});
	});
};

module.exports = {
	getRows: getRows
};
