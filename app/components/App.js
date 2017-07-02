import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';
import InputComponent from './InputComponent/InputComponent.jsx';


injectTapEventPlugin();

export default class App extends React.Component {

	render () {
		return (
			<MuiThemeProvider>
				<div>
					<AppBar title="Hello World!"/>

					<DatePicker
						hintText="Portrait Dialog"
						defaultDate={new Date()}
					/>

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

					<InputComponent/>

					<RaisedButton label="Cool Button"/>
				</div>
			</MuiThemeProvider>
		);
	}
};