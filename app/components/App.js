import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class App extends React.Component {

	render () {
		return (
			<MuiThemeProvider>
				<div>
					<h1>Hello World!</h1>
					<RaisedButton label="Cool Button"/>
				</div>
			</MuiThemeProvider>
		);
	}
};