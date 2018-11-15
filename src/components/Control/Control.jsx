import React, { Component } from 'react'
import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap'
import {
	actionProcessChangeStatus,
	actionProcessChangeScore,
	actionProcessChangeSpeed,
} from '../../actions/process-actions'
import {
	actionDisplayUpdateBoard,
	actionDisplayUpdateNextShape,
	actionDisplayUpdateCurrentShape,
} from '../../actions/display-actions'

import { PROCESS_RUN, PROCESS_STOP, PROCESS_PAUSE } from '../../constants/process-constants'
import { store } from '../../store/configureStore'

class Control extends Component {
	constructor(props) {
		super(props)

		this.state = {
			allowActions: [],
		}

		this.run = this.run.bind(this)
		this.pause = this.pause.bind(this)
		this.continue = this.continue.bind(this)
		this.stop = this.stop.bind(this)
	}

	componentDidMount() {
		this.setState({ allowActions: this.actionsAllow(this.props.status) })
	}

	run = () => {
		// currentShape
		// let shape = randomShape()
		// store.dispatch(actionDisplayAddShape(shape))

		// nextShape

		// меняем статус
		// меняем статус

		// меняем статус
		store.dispatch(actionProcessChangeSpeed(1))
		store.dispatch(actionProcessChangeStatus(PROCESS_RUN))
	}

	pause = () => {
		store.dispatch(actionProcessChangeStatus(PROCESS_PAUSE))
	}

	continue = () => {
		store.dispatch(actionProcessChangeStatus(PROCESS_RUN))
	}

	stop = () => {
		store.dispatch(actionProcessChangeStatus(PROCESS_STOP))
	}

	move = direction => {
		// store.dispatch(actionDisplayUpdateBoard(board))
	}

	rotate = (direction, angle) => {
		// store.dispatch(actionDisplayUpdateBoard(board))
	}

	actionsAllow = status => {
		switch (status) {
			case PROCESS_RUN:
				return [PROCESS_PAUSE, PROCESS_STOP]
			case PROCESS_STOP:
				return [PROCESS_RUN]
			case PROCESS_PAUSE:
				return [PROCESS_STOP]
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
						onClick={this.run}
						disabled={process.status === PROCESS_PAUSE}
						// bsStyle="default"
						bsStyle={process.status === PROCESS_RUN ? 'success' : 'default'}
					>
						<Glyphicon glyph="play" />
					</Button>
					<Button
						onClick={process.status === PROCESS_PAUSE ? this.continue : this.pause}
						disabled={process.status === PROCESS_STOP}
						// bsStyle="default"
						bsStyle={process.status === PROCESS_PAUSE ? 'primary' : 'default'}
					>
						<Glyphicon glyph="pause" />
					</Button>
					<Button
						onClick={this.stop}
						disabled={process.status === PROCESS_STOP}
						bsStyle="default"
						// bsStyle={process.status === PROCESS_PAUSE ? 'default' : 'danger'}
					>
						<Glyphicon glyph="stop" />
					</Button>
				</ButtonGroup>
			</div>
		)
	}
}

export default Control
