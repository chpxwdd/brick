import React, { Component } from 'react'
import GridLayout from '../GridLayout'
import Shape from '../Shape'
import { SHAPE_CELLS, CELL } from '../../constants/dimention-constants'

import { Group } from 'react-konva'

export default class NextShape extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { x, y, figure, matrix } = this.props.nextShape
		return (
			<Group x={0} y={0}>
				<Shape dx={x} dy={y} figure={this.props.figure} />
			</Group>
		)
	}
}
