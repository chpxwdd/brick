import React, { Component } from 'react'
import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap'
import { RUN, STOP, PAUSE } from '../../constants/game-constants'
import * as ShapeUtils from '../../utils/shape-utils'
import * as BoardUtils from '../../utils/board-utils'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import { CELL, ROWS, SHAPE_CELLS } from '../../constants/dimention-constants'

export default class Control extends Component {
	constructor(props) {
		super(props)

		// this.state = {
		// 	status: 'STOP',
		// 	interval: null,
		// 	step: 0,
		// }

		this.run = this.run.bind(this)
		this.pause = this.pause.bind(this)
		this.resume = this.resume.bind(this)
		this.stop = this.stop.bind(this)
		// this.stepDown = this.stepDown.bind(this)
		this.handleKeyboard = this.handleKeyboard.bind(this)
	}

	// shouldComponentUpdate() {
	// 	return false
	// }

	// componentWillUpdate = () => {
	// 	console.log('componentWillUpdate')
	// 	// BoardUtils.checkColisions(this.props.board, this.props.currentShape)
	// }

	// componentDidUpdate = () => {
	// 	console.log('componentDidUpdate')
	// 	// BoardUtils.checkColisions(this.props.board, this.props.currentShape)
	// }

	// componentWillUnmount = () => this.clearInterval(this.state.interval)

	/**
	 * run game
	 */
	run = () => {
		const _tp = this.props

		// this.setState({
		// 	interval: setInterval(this.stepDown, this.calculateSpeed(_tp.process.speed)),
		// })

		const { matrix, alias, angle } = ShapeUtils.getShape()
		_tp.currentShapeUpdate({ matrix: matrix, angle: angle, alias, alias })
		_tp.nextShapeUpdate()
		// _tp.speedUpdate(1)
		_tp.gameUpdate(RUN)
	}

	/**
	 * pause game
	 */
	pause = () => {
		// const _tp = this.props
		this.props.gameUpdate(PAUSE)
		// clearInterval(this.state.interval)
	}

	/**
	 * resume game
	 */
	resume = () => {
		const _tp = this.props
		this.props.gameUpdate(RUN)
		// this.setState({
		// 	interval: setInterval(this.stepDown, this.calculateSpeed(_tp.process.speed)),
		// })
	}

	/**
	 * stop game
	 */
	stop = () => {
		const _tp = this.props
		// clearInterval(this.state.interval)
		_tp.gameUpdate(STOP)
		_tp.processUpdate({ score: 0, speed: 1, lines: 0 })
		_tp.currentShapeReset()
		_tp.nextShapeReset()
		// this.setState({
		// 	step: 0,
		// 	interval: null,
		// })
	}

	handleKeyboard = (key, e) => {
		const _tp = this.props
		switch (key) {
			case 'left':
				_tp.moveLeft(_tp.currentShape.dx)
				break
			case 'right':
				_tp.moveRight(_tp.currentShape.dx)
				break
			case 'down':
				_tp.moveDown(_tp.currentShape.dy)
				break
			case 'a':
				_tp.rotateLeft(_tp.currentShape.matrix)
				break
			case 'z':
				_tp.rotateRight(_tp.currentShape.matrix)
				break
			default:
				return
		}
	}

	/**
	 * ---------------------   ДВИЖОК ИГРЫ    --------------------------------
	 */
	// stepDown() {
	// 	const _tp = this.props

	// 	if (_tp.currentShape.dy + SHAPE_CELLS >= ROWS) {
	// 		// const { matrix, alias, angle } = ShapeUtils.getShape()
	// 		_tp.currentShapeReset()
	// 		_tp.currentShapeUpdate({ ...ShapeUtils.getShape() })
	// 		_tp.nextShapeUpdate()
	// 	} else {
	// 		_tp.moveDown(_tp.currentShape.dy)
	// 	}

	// 	console.log(BoardUtils.checkColisions(_tp.board, _tp.currentShape))

	// 	// мониторим смену фигуры <CurrentShape> при невозможности двигаться дальше
	// 	// _tp.currentShapeUpdate({ ..._tp.currentShape, dy: _tp.currentShape.dy + 1 })
	// }

	calculateSpeed = speed => 1100 - speed * 100

	render() {
		const { game } = this.props
		return (
			<div>
				<KeyboardEventHandler
					handleKeys={['all']}
					onKeyEvent={this.handleKeyboard}
				/>

				<ButtonGroup bsSize="sm">
					<Button
						onClick={this.run}
						disabled={game === RUN || game == PAUSE}
						bsStyle={game === RUN ? 'success' : 'default'}
					>
						<Glyphicon glyph="play" />
					</Button>
					<Button
						onClick={game === PAUSE ? this.resume : this.pause}
						disabled={game === STOP}
						bsStyle={game === PAUSE ? 'primary' : 'default'}
					>
						<Glyphicon glyph="pause" />
					</Button>
					<Button onClick={this.stop} disabled={game === STOP} bsStyle="default">
						<Glyphicon glyph="stop" />
					</Button>
				</ButtonGroup>
			</div>
		)
	}
}
