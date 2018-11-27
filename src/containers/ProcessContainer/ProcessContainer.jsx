import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionProcessUpdateSpeed } from '../../actions/process-actions'
import Process from '../../components/Process'

class ProcessContainer extends Component {
	render() {
		const { speed, score, lines, speedUpdate } = this.props
		return <Process speed={speed} score={score} lines={lines} speedUpdate={speedUpdate} />
	}
}

const mapStateToProps = store => {
	return {
		speed: store.process.speed,
		score: store.process.score,
		lines: store.process.lines,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		speedUpdate: bindActionCreators(actionProcessUpdateSpeed, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProcessContainer)
