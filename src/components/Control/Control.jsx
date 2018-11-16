import React, { Component } from 'react'
import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap'
import { PROCESS_RUN, PROCESS_STOP, PROCESS_PAUSE } from '../../constants/process-constants'
import { moveShape, rotateShape, shapeMatrix, shapeList } from '../../utils/shape-utils'

class Control extends Component {
	constructor(props) {
		super(props)

		this.run = this.run.bind(this)
		this.pause = this.pause.bind(this)
		this.continue = this.continue.bind(this)
		this.stop = this.stop.bind(this)
	}

	run = () => {
		const {
			process,
			board,
			currentShape,
			nextShape,
			actionProcessChangeSpeed,
			actionProcessChangeScore,
			actionProcessChangeStatus,
			actionNextShapeUpdate,
			actionCurrentShapeUpdate,
			actionBoardUpdate,
		} = this.props

		// currentShape
		// let shape = randomShape()
		// store.dispatch(actionDisplayAddShape(shape))

		// nextShape

		// меняем статус
		// меняем статус

		// меняем статус

		actionProcessChangeSpeed(1)
		actionProcessChangeStatus(PROCESS_RUN)
		// store.dispatch(actionProcessChangeSpeed(1))
		// store.dispatch(actionProcessChangeStatus(PROCESS_RUN))
	}

	pause = () => {
		this.props.actionProcessChangeStatus(PROCESS_PAUSE)
	}

	continue = () => {
		this.props.actionProcessChangeStatus(PROCESS_RUN)
	}

	stop = () => {
		this.props.actionProcessChangeStatus(PROCESS_STOP)
	}

	move = direction => {
		// actionDisplayUpdateBoard(board)
	}

	rotate = (direction, angle) => {
		// actionDisplayUpdateBoard(board)
	}

	render() {
		const { process } = this.props
		return (
			<div>
				<ButtonGroup bsSize="sm">
					<Button
						onClick={this.run}
						disabled={process.status === PROCESS_PAUSE}
						bsStyle={process.status === PROCESS_RUN ? 'success' : 'default'}
					>
						<Glyphicon glyph="play" />
					</Button>
					<Button
						onClick={process.status === PROCESS_PAUSE ? this.continue : this.pause}
						disabled={process.status === PROCESS_STOP}
						bsStyle={process.status === PROCESS_PAUSE ? 'primary' : 'default'}
					>
						<Glyphicon glyph="pause" />
					</Button>
					<Button onClick={this.stop} disabled={process.status === PROCESS_STOP} bsStyle="default">
						<Glyphicon glyph="stop" />
					</Button>
				</ButtonGroup>
			</div>
		)
	}
}

export default Control
