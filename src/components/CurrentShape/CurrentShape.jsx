import React, { Component } from 'react'
import Shape from '../Shape'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import { Group } from 'react-konva'
import { STOP, RUN, PAUSE } from '../../constants/game-constants'

export default class CurrentShape extends Component {
	constructor(props) {
		super(props)
		this.state = {
			interval: null,
			step: 0,
			coords: [],
		}
		this.handleKeyboard = this.handleKeyboard.bind(this)
	}

	componentDidMount() {
		this.setState({
			interval: setInterval(this.iterator, this.props.speed),
		})
	}

	// componentWillMount(){}
	componentDidUpdate() {
		// if (this.props.game == STOP || this.props.game == PAUSE) {
		// 	this.setState({
		// 		interval: setInterval(this.iterator, this.props.speed),
		// 	})
		// }
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	// если невозможно сделать ход
	// 	console.log('<currentShape/>', 'shouldComponentUpdate')
	// 	return this.props.game == STOP || this.props.game == PAUSE
	// }

	componentWillUnmount() {
		clearInterval(this.state.interval)
	}

	iterator = () => {
		if (this.props.game === RUN) {
			this.setState({ step: this.state.step + 1 })
			this.props.moveDown(this.props.dy)
			console.log('step ' + this.state.step)
		}
	}

	handleKeyboard = (key, e) => {
		const _tp = this.props
		switch (key) {
			case 'left':
				_tp.moveLeft(_tp.dx)
				break
			case 'right':
				_tp.moveRight(_tp.dx)
				break
			case 'down':
				_tp.moveDown(_tp.dy)
				break
			case 'a':
				_tp.rotateLeft(_tp.matrix)
				break
			case 'z':
				_tp.rotateRight(_tp.matrix)
				break
			default:
				return
		}
	}
	render() {
		const { dx, dy, matrix } = this.props
		return (
			<Group>
				<KeyboardEventHandler handleKeys={['all']} onKeyEvent={this.handleKeyboard} />
				<Shape dx={dx} dy={dy} matrix={matrix} />
			</Group>
		)
	}
}
