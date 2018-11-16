import React, { Component } from 'react'
import GridLayout from '../GridLayout'
import Shape from '../Shape'
import { COLS, ROWS, SHAPE_CELLS, MARGIN, CELL } from '../../constants/dimention-constants'

import { Group } from 'react-konva'

export default class CurrentShape extends Component {
	constructor(props) {
		super(props)

		this.state = {
			x: 0,
			y: 0,
			// x: this.props.dx,
			// y: this.props.dy,
			width: SHAPE_CELLS * CELL,
			height: SHAPE_CELLS * CELL,
			cols: SHAPE_CELLS,
			rows: SHAPE_CELLS,
		}
	}

	render() {
		const { x, y } = this.state
		return (
			<Group>
				<Shape dx={x} dy={y} figure="S" />
			</Group>
		)
	}
}
