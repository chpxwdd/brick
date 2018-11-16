import React, { Component } from 'react'
import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap'
import { RUN, STOP, PAUSE } from '../../constants/control-constants'
// import { moveShape, rotateShape, shapeMatrix, shapeList } from '../../utils/shape-utils'
import { boardMatrix, boardCheckShapePosition, boardCombineShape, boardDropLine } from '../../utils/board-utils'

class Control extends Component {
	constructor(props) {
		super(props)

		this.run = this.run.bind(this)
		this.pause = this.pause.bind(this)
		this.continue = this.continue.bind(this)
		this.stop = this.stop.bind(this)
	}

	componentDidMount() {}

	run = () => {
		const _tp = this.props
		// currentShape

		// let shape = randomShape()
		_tp.actionBoardUpdate()
		// store.dispatch(actionDisplayAddShape(shape))

		// nextShape

		// меняем статус
		// меняем статус

		// меняем статус

		_tp.boardUpdate()
		_tp.updateSpeed(1)
		_tp.updateStatus(RUN)
		// store.dispatch(updateSpeed(1))
		// store.dispatch(updateStatus(RUN))
	}

	pause = () => {
		this.props.updateStatus(PAUSE)
	}

	continue = () => {
		this.props.updateStatus(RUN)
	}

	stop = () => {
		this.props.updateStatus(STOP)
	}

	move = direction => {
		// updateBoard(board)
	}

	rotate = (direction, angle) => {
		// updateBoard(board)
	}

	render() {
		const { process } = this.props
		return (
			<div>
				<ButtonGroup bsSize="sm">
					<Button
						onClick={this.run}
						disabled={process.status === PAUSE}
						bsStyle={process.status === RUN ? 'success' : 'default'}
					>
						<Glyphicon glyph="play" />
					</Button>
					<Button
						onClick={process.status === PAUSE ? this.continue : this.pause}
						disabled={process.status === STOP}
						bsStyle={process.status === PAUSE ? 'primary' : 'default'}
					>
						<Glyphicon glyph="pause" />
					</Button>
					<Button onClick={this.stop} disabled={process.status === STOP} bsStyle="default">
						<Glyphicon glyph="stop" />
					</Button>
				</ButtonGroup>
			</div>
		)
	}
}

export default Control
