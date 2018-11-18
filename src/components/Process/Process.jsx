import React, { Component } from 'react'
import { Button, ButtonGroup, Glyphicon, Label } from 'react-bootstrap'
import { RUN, STOP, PAUSE } from '../../constants/control-constants'
// import { moveShape, rotateShape, shapeMatrix, shapeList, randomShape } from '../../utils/shape-utils'
import {
	getShape,
	transponse,
	shapeList,
	randomShape,
} from '../../utils/shape-utils'
// import { boardCheckShapePosition, boardCombineShape, boardDropLine } from '../../utils/board-utils'

class Process extends Component {
	constructor(props) {
		super(props)

		this.run = this.run.bind(this)
		this.pause = this.pause.bind(this)
		this.continue = this.continue.bind(this)
		this.stop = this.stop.bind(this)
	}

	run = () => {
		// next Shape
		const shape = getShape()
		this.props.nextShapeUpdate(shape)
		// rotate to current shape cont
		// this.props.currentShapeUpdate(shape)
		this.props.currentShapeUpdate({
			dx: 0,
			dt: 0,
			matrix: shape.matrix,
		})
	}

	pause = () => {
		this.props.updateStatus(PAUSE)
	}

	continue = () => {
		this.props.updateStatus(RUN)
	}

	stop = () => {
		this.props.updateStatus(STOP)
		this.props.updateSpeed(0)
	}

	move = direction => {}

	rotate = (direction, angle) => {}

	render() {
		const { process } = this.props

		return (
			<div>
				<div className="Display">
					<ButtonGroup bsSize="sm">
						<Button
							onClick={this.run}
							disabled={process.status === PAUSE}
							bsStyle={
								process.status === RUN ? 'success' : 'default'
							}
						>
							<Glyphicon glyph="play" />
						</Button>
						<Button
							onClick={
								process.status === PAUSE
									? this.continue
									: this.pause
							}
							disabled={process.status === STOP}
							bsStyle={
								process.status === PAUSE ? 'primary' : 'default'
							}
						>
							<Glyphicon glyph="pause" />
						</Button>
						<Button
							onClick={this.stop}
							disabled={process.status === STOP}
							bsStyle="default"
						>
							<Glyphicon glyph="stop" />
						</Button>
					</ButtonGroup>
				</div>
				<hr />
				<div className="Display">
					<ul className="list-inline ">
						<li>
							<b>Score </b>
							<Label>{process.score}</Label>
						</li>
						<li>
							<b>Speed </b>
							<Label>{process.speed}</Label>
						</li>
						<li>
							<b>Lines </b>
							<Label>{process.lines}</Label>
						</li>
					</ul>
				</div>
				<hr />
			</div>
		)
	}
}

export default Process
