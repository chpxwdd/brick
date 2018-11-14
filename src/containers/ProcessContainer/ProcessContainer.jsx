import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Button} from 'react-bootstrap'
import {actionProcessReady, actionProcessRun, actionProcessPause, actionProcessStop, actionProcessContinue} from '../../actions/process-actions'


class ProcessContainer extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {
			process, 
			actionProcessReady,
			actionProcessRun,
			actionProcessPause,
			actionProcessStop,
			actionProcessContinue 
		} = this.props

		return <div>
			<Button onClick={}>Start</Button>
		</div>
	}
}

const mapStateToProps = store => {
	console.log(store)
	return {
		process: store.process,
	}
}

const mapDispatchToProps = dispatch => ({})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProcessContainer)
