import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';
import InputComponent from '../InputComponent';
import TagsComponent from '../TagsComponent';
import apiService from '../../services';

injectTapEventPlugin();

export default class CashFlowFormComponent extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			date: new Date(),
			amount: 0.00,
			description: '',
			location: '',
			type: 'out',
			tags: [],
			recurring: false,
			recurringType: null,
			need: false,
			note: '',
			source: 'CC1'
		};

		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleFormChange ({ target }) {
		this.setState({ [target.name]: target.value });
		console.log(this.state);
	}

	handleSubmit () {
		console.log('submitted', this.state);
		apiService.getData();
	}

	render () {
		return (
			<div className="cashflow-form">
				<h2>Amount</h2>
				<InputComponent
					placeholder="$0.00"
					value={this.state.amount}
					type="number"
					name="amount"
					onChange={this.handleFormChange}/>

				<h2>Description</h2>
				<InputComponent
					placeholder="Description"
					value={this.state.description}
					name="description"
					onChange={this.handleFormChange}/>

				<h2>Location</h2>
				<InputComponent
					placeholder="Location"
					value={this.state.location}
					name="location"
					onChange={this.handleFormChange}/>

				<h2>Date</h2>
				<DatePicker
					hintText="Portrait Dialog"
					defaultDate={new Date()}
					name="date"
				/>

				<h2>Type</h2>
				<RadioButtonGroup
					name="type"
					labelPosition="right"
					defaultSelected="out"
					value={this.state.type}
					onChange={this.handleFormChange}>
					<RadioButton
						value="out"
						label="Spending"
					/>
					<RadioButton
						value="in"
						label="Income"
					/>
				</RadioButtonGroup>

				<h2>Tags</h2>
				<TagsComponent/>

				<RaisedButton label="Log It" onTouchTap={this.handleSubmit}/>
			</div>
		);
	}
};
