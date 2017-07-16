const GoogleSpreadsheet = require('google-spreadsheet');
const config = require('../config');
const creds = require('../config/google-generated-creds.json');

module.exports = () => {
	const doc = new GoogleSpreadsheet(config.spreadsheetId);

	doc.useServiceAccountAuth(creds, error => {
		if (error) throw error;
		doc.getRows(1, (error, rows) => {
			if (error) throw error;
			console.log('rows', rows);
		});
	});
};
