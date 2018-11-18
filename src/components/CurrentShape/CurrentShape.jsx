import React, { Component } from 'react'
import Shape from '../Shape'
import { Group } from 'react-konva'
import { RUN, PAUSE, STOP } from '../../constants/control-constants'
import { ROWS } from '../../constants/dimention-constants'
// import Process from '../Process';

export default class CurrentShape extends Component {
	game = () => {
		const { process, currentShape, currentShapeUpdate } = this.props

		if (process.status === RUN) {
			if (currentShape.dy <= ROWS) {
				currentShapeUpdate(currentShape.dy++)
			} else {
				currentShapeUpdate({ dx: 0, dy: 0, matrix: [] })
			}
		}

		if (process.status === PAUSE) {
			clearInterval(this.interval)
		}

		console.log(currentShape.dy, ROWS)
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
