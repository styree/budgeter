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

export default {
	getData: getData
};

