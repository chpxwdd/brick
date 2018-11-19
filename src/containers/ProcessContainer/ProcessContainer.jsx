import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Group } from 'react-konva'
import {
	actionProcessUpdateSpeed,
	actionProcessUpdateStatus,
	actionProcessUpdateScore,
	actionProcessUpdateLines,
	actionProcessUpdate,
} from '../../actions/process-actions'
import Process from '../../components/Process'
import {
	dimentions,
	BLOCK_STATISTICS,
} from '../../constants/dimention-constants'

class ProcessContainer extends Component {
	render() {
		const { process } = this.props

		return (
			<Group {...dimentions(BLOCK_STATISTICS)}>
				<Process process={process} />
			</Group>
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
)(ProcessContainer)
