import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';
import InputComponent from '../InputComponent';
import TagsComponent from '../TagsComponent';

injectTapEventPlugin();

export default class CashFlowFormComponent extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			date: new Date(),
			description: '',
			amount: 0.00,
			type: 'out',
			tags: []
		};
	}

	render () {
		return (
			<div className="cashflow-form">
				<h2>Amount</h2>
				<InputComponent placeholder="$0.00" value={this.state.amount}/>

				<h2>Description</h2>
				<InputComponent placeholder="Description" value={this.state.description}/>

				<h2>Date</h2>
				<DatePicker
					hintText="Portrait Dialog"
					defaultDate={new Date()}
				/>

				<h2>Type</h2>
				<RadioButtonGroup name="type" labelPosition="right" defaultSelected="out">
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

				<RaisedButton label="Log It"/>
			</div>
		);
	}
};
