import React, { Component } from 'react'
import Shape from '../Shape'
import { Group } from 'react-konva'
import { RUN, PAUSE } from '../../constants/control-constants'
import { CELL, ROWS } from '../../constants/dimention-constants'
// import Process from '../Process';

export default class CurrentShape extends Component {
	game = () => {
		const { process, currentShape, currentShapeUpdate } = this.props

		if (process.status === RUN) {
			if (currentShape.dy <= ROWS) {
				currentShapeUpdate(currentShape.dy++)
			} else {
				currentShapeUpdate({})
			}
		}

		if (process.status === PAUSE) {
			clearInterval(this.interval)
			currentShapeUpdate({})
		}

		console.log(currentShape.dy)
	}

	componentDidUpdate() {
		// this.interval = setInterval(this.game, 1000)
	}

	componentDidMount() {
		this.interval = setInterval(this.game, 500)
	}

	componentWillUnmount() {
		console.log('unmount')
		clearInterval(this.interval)
	}

	render() {
		const { currentShape } = this.props
		return (
			<Group>
				<Shape {...currentShape} />
			</Group>
		)
	}
}
