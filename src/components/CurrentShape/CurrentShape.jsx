import React, { Component } from 'react'
import Shape from '../Shape'
import { Group } from 'react-konva'

export default class CurrentShape extends Component {
	// game = () => {
	// 	const { process, currentShape, currentShapeUpdate } = this.props

	// 	if (process.status === RUN) {
	// 		currentShapeUpdate(currentShape.dy++)
	// 	}

	// 	if (process.status === PAUSE) {
	// 		clearInterval(this.interval)
	// 	}

	// 	console.log(currentShape.dy, ROWS)
	// }

	// componentDidUpdate() {
	// 	this.interval = setInterval(this.game, 1000)
	// }

	// componentDidMount() {
	// 	this.interval = setInterval(this.game, 1000)
	// }

	// componentWillUnmount() {
	// 	console.log('unmount')
	// 	clearInterval(this.interval)
	// }

	render() {
		const { currentShape } = this.props
		return (
			<Group>
				<Shape {...currentShape} />
			</Group>
		)
	}
}
