import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
	actionProcessUpdateSpeed,
	actionProcessUpdateStatus,
	actionProcessUpdateScore,
	actionProcessUpdateLines,
} from '../../actions/process-actions'
import Control from '../../components/Control'
import { Layer } from 'react-konva'

class ControlContainer extends Component {
	render() {
		const { process } = this.props

		return (
			<Layer>
				<Control process={process} />
			</Layer>
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
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ControlContainer)
