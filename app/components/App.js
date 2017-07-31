import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CashFlowFormComponent from './CashFlowFormComponent';
import AppBar from 'material-ui/AppBar';
import SideBar from './SideBarComponent';

export default class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			sidebarOpen: false
		};

		this.toggleSidebar = this.toggleSidebar.bind(this);
	}

	toggleSidebar () {
		this.setState({ sidebarOpen: !this.state.sidebarOpen });
	};

	render () {
		return (
			<MuiThemeProvider>
				<div>
					<AppBar
						title="Hello World!"
						onLeftIconButtonTouchTap={this.toggleSidebar}/>
					<div className="content-wrapper">
						<CashFlowFormComponent/>
					</div>
					<SideBar
						open={this.state.sidebarOpen}
						onRequestChange={(sidebarOpen) => this.setState({ sidebarOpen })}/>
				</div>
			</MuiThemeProvider>
		);
	}
};
