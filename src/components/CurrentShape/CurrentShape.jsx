import React, { Component } from 'react'
import Shape from '../Shape'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import { Group } from 'react-konva'

export default class CurrentShape extends Component {
	constructor(props) {
		super(props)
		
		this.handleKeyboard = this.handleKeyboard.bind(this)
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
