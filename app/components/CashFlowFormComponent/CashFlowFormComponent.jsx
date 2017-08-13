import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import DatePicker from 'material-ui/DatePicker';
import InputComponent from '../InputComponent';
import TagsComponent from '../TagsComponent';
import CurrencyInput from '../CurrencyInput';
import apiService from '../../services';

injectTapEventPlugin();

export default class CashFlowFormComponent extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			date: new Date(),
			amount: undefined,
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
		this.handleDateChange = this.handleDateChange.bind(this);
	}

	handleFormChange ({ target }) {
		this.setState({ [target.name]: target.value });
		console.log(this.state);
	}

	handleDateChange (empty, date) {
		this.setState({ date });
		console.log(date);
	}

	handleSubmit () {
		console.log('submitted', this.state);
		apiService.postData(this.state);
	}

	render () {
		apiService.getData();
		return (
			<div className="cashflow-form">

				<div className="row">
					<div className="cashflow__ammount-wrap">
						<CurrencyInput
							onChange={this.handleFormChange}
							value={this.state.amount}/>
					</div>

					<div className="column input-details card">
						<h2>Transaction Details</h2>
						<DatePicker
							hintText="Portrait Dialog"
							name="date"
							value={this.state.date}
							disableYearSelection={true}
							onChange={this.handleDateChange}
						/>

						<InputComponent
							placeholder="Location"
							value={this.state.location}
							name="location"
							onChange={this.handleFormChange}/>

						<InputComponent
							placeholder="Description"
							value={this.state.description}
							name="description"
							onChange={this.handleFormChange}/>
					</div>
				</div>

				<h2>Tags</h2>
				<TagsComponent/>

				<RaisedButton label="Log It" onTouchTap={this.handleSubmit}/>
			</div>
		);
	}
};
