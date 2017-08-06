import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui';

export default class Toast extends React.Component {
	static propTypes = {
		open: PropTypes.bool.isRequired,
		message: PropTypes.string.isRequired
	};

	render () {
		return (
			<Snackbar open={this.prop.open} message={this.props.message} {...props}/>
		);
	}
}
