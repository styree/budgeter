import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

export default class CurrencyInput extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			type: 'out'
		};

		this.propTypes = {
			onChange: PropTypes.func
		};
	}

	render () {
		return (
			<div className="currencyinput card">
				<h2>Transaction Amount</h2>
				<div className="currencyinput__wrapper">
					<input
						type="number"
						step=".01"
						min="0.00"
						max="10000.00"
						placeholder="$0.00"
						onChange={this.props.onChange}/>
				</div>

				<div className="currencyinput__type">
					<p className="currencyinput__type__label">Type:</p>
					<RadioButtonGroup
						name="type"
						defaultSelected="out"
						value={this.state.type}
						onChange={this.props.handleFormChange}
						className="currencyinput__type__group">
						<RadioButton
							value="out"
							label="Spending"
							className="currencyinput__type__radio"
							iconStyle={{ marginRight: 6 }}/>
						<RadioButton
							value="in"
							label="Income"
							className="currencyinput__type__radio"
							iconStyle={{ marginRight: 6 }}/>
					</RadioButtonGroup>
				</div>
			</div>
		);
	}
}
