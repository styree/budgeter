import React from 'react';
import Chip from 'material-ui/Chip';
import InputComponent from '../InputComponent/InputComponent.jsx';

export default class TagsComponent extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			chipData: [
				{ key: 0, label: 'Bills' },
				{ key: 1, label: 'Food' },
				{ key: 2, label: 'Rent' },
				{ key: 3, label: 'Misc' },
			]
		};
	}

	handleRequestDelete (key) {
		this.chipData = this.state.chipData;
		const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
		this.chipData.splice(chipToDelete, 1);
		this.setState({ chipData: this.chipData });
	}

	renderChip (data) {
		return (
			<Chip
				key={data.key}
				onRequestDelete={() => this.handleRequestDelete(data.key)}
			>
				{data.label}
			</Chip>
		);
	}

	render () {
		return (
			<div>
				<InputComponent/>
				{this.state.chipData.map(this.renderChip, this)}
			</div>
		);
	}
}