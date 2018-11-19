import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Group } from 'react-konva'
import { actionGameStatusUpdate } from '../../actions/game-actions'

class GameContainer extends Component {
	render() {
		const { status, updateStatus } = this.props

		return (
			<Group>
				<Game status={status} updateStatus={updateStatus} />
			</Group>
		)
	}
}

const mapStateToProps = store => {
	return {
		status: store.status,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateStatus: bindActionCreators(actionGameStatusUpdate, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameContainer)
