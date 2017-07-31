import React from 'react';
import { Drawer, MenuItem } from 'material-ui';
import PropTypes from 'prop-types';

export default class SideBar extends React.Component {
	render () {
		return (
			<Drawer {...this.props} docked={false}>
				<MenuItem>Menu Item</MenuItem>
				<MenuItem>Menu Item 2</MenuItem>
			</Drawer>
		);
	}
}

SideBar.propTypes = {
	sidebarOpen: PropTypes.bool
};
