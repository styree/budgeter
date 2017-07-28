import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
	height: 50,
	paddingLeft: 10,
	paddingRight: 10,
	borderRadius: 5,
	border: 'none',
	fontSize: 20,
	width: '100%'
};

export default class InputComponent extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		const { type } = this.props;
		return (
			<div>
				<Paper zDepth={1}>
					<input
						type={type || 'text'}
						placeholder={this.props.placeholder}
						style={style}
						{...this.props}
					/>
				</Paper>
			</div>
		);
	}
}
