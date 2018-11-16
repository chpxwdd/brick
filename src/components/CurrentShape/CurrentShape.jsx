import React, { Component } from 'react'
import Shape from '../Shape'
import { Group } from 'react-konva'

export default class CurrentShape extends Component {
	render() {
		const { dx, dy, matrix } = this.props.currentShape
		return (
			<Group x={0} y={0}>
				<Shape dx={dx} dy={dy} matrix={matrix} />
			</Group>
		)
	}
}
