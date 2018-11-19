import React, { Component } from 'react'
import Shape from '../Shape'
import { Group } from 'react-konva'

export default class CurrentShape extends Component {
	render() {
		const {
			currentShape,
			// , currentShapeUpdate
		} = this.props
		return (
			<Group>
				<Shape
					dx={currentShape.x}
					dy={currentShape.dy}
					matrix={currentShape.matrix}
				/>
			</Group>
		)
	}
}
