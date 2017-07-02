import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';
import InputComponent from './InputComponent/InputComponent.jsx';
import TagsComponent from './TagsComponent/TagsComponent.jsx';

injectTapEventPlugin();

export default class App extends React.Component {
	render () {
		return (
			<MuiThemeProvider>
				<div>
					<AppBar title="Hello World!"/>

					<div className="content-wrapper">
						<h2>Amount</h2>
						<InputComponent placeholder="$0.00"/>

						<h2>Description</h2>
						<InputComponent placeholder="Description"/>

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

						<RaisedButton label="Cool Button"/>
					</div>

				</div>
			</MuiThemeProvider>
		);
	}
};