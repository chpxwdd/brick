import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
	actionProcessChangeSpeed,
	actionProcessChangeStatus,
	actionProcessChangeScore,
} from '../../actions/process-actions'
import Process from '../../components/Process'

class ProcessContainer extends Component {
	render() {
		const { process, actionProcessChangeSpeed, actionProcessChangeScore, actionProcessChangeStatus } = this.props

		return (
			<div>
				<Process
					process={process}
					actionProcessChangeSpeed={actionProcessChangeSpeed}
					actionProcessChangeScore={actionProcessChangeScore}
					actionProcessChangeStatus={actionProcessChangeStatus}
				/>
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
		actionProcessChangeSpeed: bindActionCreators(actionProcessChangeSpeed, dispatch),
		actionProcessChangeStatus: bindActionCreators(actionProcessChangeStatus, dispatch),
		actionProcessChangeScore: bindActionCreators(actionProcessChangeScore, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProcessContainer)
