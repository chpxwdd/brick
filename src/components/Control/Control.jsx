import React, { Component } from 'react'
import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap'
import { RUN, STOP, PAUSE } from '../../constants/game-constants'
import * as ShapeUtils from '../../utils/shape-utils'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import { CELL } from '../../constants/dimention-constants'

export default class Control extends Component {
	constructor(props) {
		super(props)

		this.state = {
			interval: null,
			step: 0,
		}

		this.run = this.run.bind(this)
		this.pause = this.pause.bind(this)
		this.resume = this.resume.bind(this)
		this.stop = this.stop.bind(this)
		this.stepDown = this.stepDown.bind(this)
		this.handleKeyboard = this.handleKeyboard.bind(this)
	}

	componentWillUnmount = () => this.clearInterval(this.state.interval)

	/**
	 * run game
	 */
	run = () => {
		const _tp = this.props

		this.setState({
			interval: setInterval(this.stepDown, this.calculateSpeed(_tp.process.speed)),
		})

		const { matrix, alias, angle } = ShapeUtils.getShape()
		_tp.currentShapeUpdate({ matrix: matrix, angle: angle, alias, alias })
		_tp.nextShapeUpdate()
		_tp.speedUpdate(1)
		_tp.gameUpdate(RUN)
	}

	/**
	 * pause game
	 */
	pause = () => {
		const _tp = this.props
		_tp.gameUpdate(PAUSE)
		clearInterval(this.state.interval)
	}

	/**
	 * resume game
	 */
	resume = () => {
		const _tp = this.props
		_tp.gameUpdate(RUN)
		this.setState({
			interval: setInterval(this.stepDown, this.calculateSpeed(_tp.process.speed)),
		})
	}

	/**
	 * stop game
	 */
	stop = () => {
		const _tp = this.props
		clearInterval(this.state.interval)
		_tp.gameUpdate(STOP)
		_tp.processUpdate({ score: 0, speed: 1, lines: 0 })
		_tp.currentShapeReset()
		_tp.nextShapeReset()
		this.setState({
			step: 0,
			interval: null,
		})
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
			case 'ctrl +  left':
				_tp.rotateLeft(_tp.currentShape.matrix)
				break
			case 'ctrl +  right':
				_tp.rotateRight(_tp.currentShape.matrix)
				break
			default:
				console.log(key, e)
				return
		}
	}

	/**
	 * ---------------------   ДВИЖОК ИГРЫ    --------------------------------
	 */
	stepDown() {
		const _tp = this.props

		if (_tp.currentShape.dy + CELL === ROWS) {
			_tp.currentShapeUpdate(_tp.nextShape)
			_tp.nextShapeReset()
		}
		// мониторим смену фигуры <CurrentShape> при невозможности двигаться дальше
		// _tp.currentShapeUpdate({ ..._tp.currentShape, dy: _tp.currentShape.dy + 1 })
		_tp.moveDown(_tp.currentShape.dy)
	}

	calculateSpeed = speed => 1100 - speed * 100

	render() {
		const { game } = this.props
		return (
			<div>
				{/* <KeyboardEventHandler
					handleKeys={}
					onKeyEvent={(e, key) => console.log(key, e)}
				/> */}
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
				<div>Loading{'...'.substr(0, (this.state.step % 3) + 1)}</div>
				<div>{this.state.step}</div>
			</div>
		)
	}
}
