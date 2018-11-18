import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
	actionProcessUpdateSpeed,
	actionProcessUpdateStatus,
	actionProcessUpdateScore,
	actionProcessUpdateLines,
	actionProcessUpdate,
} from '../../actions/process-actions'
import Control from '../../components/Control'

class ControlContainer extends Component {
	render() {
		const {
			process,
			updateProcess,
			updateLines,
			updateSpeed,
			updateStatus,
			updateScore,
		} = this.props

		return (
			<div>
				<Control process={process} updateStatus={updateStatus} />
			</div>
		)
	}
}

const mapStateToProps = store => {
	return {
		process: store.process,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateLines: bindActionCreators(actionProcessUpdateLines, dispatch),
		updateSpeed: bindActionCreators(actionProcessUpdateSpeed, dispatch),
		updateStatus: bindActionCreators(actionProcessUpdateStatus, dispatch),
		updateScore: bindActionCreators(actionProcessUpdateScore, dispatch),
		updateProcess: bindActionCreators(actionProcessUpdate, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ControlContainer)
