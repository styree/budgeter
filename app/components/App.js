import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CashFlowFormComponent from './CashFlowFormComponent';
import AppBar from 'material-ui/AppBar';

export default class App extends React.Component {
	render () {
		return (
			<MuiThemeProvider>
				<div>
					<AppBar title="Hello World!"/>
					<div className="content-wrapper">
						<CashFlowFormComponent/>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
};
