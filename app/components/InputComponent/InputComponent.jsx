import React from 'react';

export default class InputComponent extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div>
				<input type="text"/>
			</div>
		);
	}
}