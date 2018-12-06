import React, { Component } from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import { PAUSE } from '../../constants/game-constants'

export default class ManipulateHandler extends Component {
	constructor(props) {
		super(props)

		this.handleKeyboard = this.handleKeyboard.bind(this)

		this.state = {
			interval: null,
			speed: 1000,
		}
	}

	componentDidMount() {
		this.setState({
			interval: setInterval(() => {
				this.loop()
			}, this.state.speed),
		})
	}

	render() {
		return <KeyboardEventHandler handleKeys={['all']} onKeyEvent={this.handleKeyboard} />
	}

	loop = () => {
		// перед каждым ходом необходимо проверить влезет ли фигура
		if (this.props.game === PAUSE) {
			return false
		}
		this.props.moveDown(this.props.currentShape.dy)
	}

	handleKeyboard = (key, e) => {
		switch (key) {
			case 'left':
				this.props.moveLeft(this.props.currentShape.dx)
				break
			case 'right':
				this.props.moveRight(this.props.currentShape.dx)
				break
			case 'space':
				this.setState({ speed: 100 })

			case 'down':
				this.props.moveDown(this.props.currentShape.dy)
				break
			case 'a':
				this.props.rotateLeft(this.props.currentShape.matrix)
				break
			case 'z':
				this.props.rotateRight(this.props.currentShape.matrix)
				break
			default:
				return
		}
	}
}
