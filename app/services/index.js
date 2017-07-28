import fetch from 'isomorphic-fetch';

const getData = () => {
	console.log('FETCH', fetch);
	fetch('http://localhost:3000')
		.then(resp => {
			if (resp.status >= 400) {
				throw new Error('Bad response from server');
			}

			console.log('resp', resp.json());
			return resp;
		});
};

const postData = (data) => {
	console.log('POST', data);
	fetch('http://localhost:3000/log', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then(resp => {
		if (resp.status >= 400) {
			throw new Error('Bad response from server');
		}
	});
};

export default {
	getData: getData,
	postData: postData
};

