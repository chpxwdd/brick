import React, { Component } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import {
	actionProcessChangeStatus,
	actionProcessChangeScore,
	actionProcessChangeSpeed,
} from '../../actions/process-actions'
import { actionDisplayUpdate, actionDisplayAddShape, actionDisplayClearLine } from '../../actions/display-actions'
import {
	PROCESS_RUN,
	PROCESS_STOP,
	PROCESS_CONTINUE,
	PROCESS_PAUSE,
	PROCESS_READY,
} from '../../constants/process-constants'
import { store } from '../../store/configureStore'

class Control extends Component {
	constructor(props) {
		super(props)
		this.state = {
			allow: [PROCESS_READY],
		}
		this.ready = this.ready.bind(this)
		this.run = this.run.bind(this)
		this.pause = this.pause.bind(this)
		this.continue = this.continue.bind(this)
		this.stop = this.stop.bind(this)
	}

	componentDidMount() {
		this.ready()
	}

	ready = () => {
		store.dispatch(actionProcessChangeStatus(PROCESS_READY))
	}

	run() {
		store.dispatch(actionProcessChangeStatus(PROCESS_RUN))
	}

	pause() {
		store.dispatch(actionProcessChangeStatus(PROCESS_PAUSE))
	}

	continue() {
		store.dispatch(actionProcessChangeStatus(PROCESS_CONTINUE))
	}

	stop() {
		store.dispatch(actionProcessChangeStatus(PROCESS_STOP))
	}

	availableActions = process => {
		switch (process) {
			case '':
			default:
				return [PROCESS_RUN]
		}
	}

	render() {
		const { process } = this.props

		return (
			<div>
				<ButtonGroup bsSize="sm">
					<Button
						onClick={() => {
							store.dispatch(actionProcessChangeStatus(PROCESS_RUN))
						}}
					>
						Run
					</Button>
					<Button>Stop</Button>
				</ButtonGroup>
			</div>
		)
	}
}

export default Control
