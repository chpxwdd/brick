import React, { Component } from 'react'
import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap'
import { RUN, STOP, PAUSE } from '../../constants/game-constants'
import * as ShapeUtils from '../../utils/shape-utils'
import KeyHandler, { KEYPRESS } from 'react-key-handler'

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
		// this.currentSpeed = this.currentSpeed.bind(this)
		this.handleKeyboard = this.handleKeyboard.bind(this)
	}

	componentWillUnmount = () => this.clearInterval(this.state.interval)

	/**
	 * run game
	 */
	run = () => {
		const _tp = this.props

		this.setState({
			interval: setInterval(this.stepDown, this.currentSpeed),
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
			interval: setInterval(this.stepDown, this.currentSpeed),
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

	handleKeyboard = event => {
		console.log(event)
	}

	/**
	 * ---------------------   ДВИЖОК ИГРЫ    --------------------------------
	 */
	stepDown() {
		const _tp = this.props
		// мониторим смену фигуры <CurrentShape> при невозможности двигаться дальше
		_tp.currentShapeUpdate({ ..._tp.currentShape, dy: _tp.currentShape.dy + 1 })
		// this.setState({ step: this.state.step + 1 })
	}

	currentSpeed = 1100 - this.props.process.speed * 100

	render() {
		const { game } = this.props
		return (
			<div>
				<KeyHandler
					keyEventName={KEYPRESS}
					// keyCode={37}
					keyValue="37"
					// keyValue="ArrowLeft"
					onKeyHandle={this.handleKeyboard}
				/>
				{/* <KeyHandler
					keyEventName={KEYPRESS}
					keyValue="39"
					onKeyHandle={this.handleKeyboard}
				/>aa
				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="40"
					onKeyHandle={this.handleKeyboard}
				/>
				<KeyHandler
					keyEventName={KEYPRESS}
					keyValue="38"
					onKeyHandle={this.handleKeyboard}
				/> */}

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
