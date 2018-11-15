import React, { Component } from 'react'
import GridLayout from '../GridLayout'
import Shape from '../Shape'
import {
	DISPLAY_COLS,
	DISPLAY_ROWS,
	DISPLAY_SHAPE_CELLS,
	DISPLAY_MARGIN,
	DISPLAY_CELL,
} from '../../constants/display-constants'

import { Group } from 'react-konva'

export default class NextShape extends Component {
	constructor(props) {
		super(props)

		this.state = {
			x: DISPLAY_COLS * DISPLAY_CELL + 2 * DISPLAY_MARGIN,
			y: DISPLAY_MARGIN + (DISPLAY_ROWS * DISPLAY_CELL) / 2 - (DISPLAY_SHAPE_CELLS * DISPLAY_CELL) / 2,
			width: DISPLAY_SHAPE_CELLS * DISPLAY_CELL,
			height: DISPLAY_SHAPE_CELLS * DISPLAY_CELL,
			cols: DISPLAY_SHAPE_CELLS,
			rows: DISPLAY_SHAPE_CELLS,
		}
	}

	render() {
		const { x, y } = this.state
		return (
			<Group>
				<GridLayout {...this.state} />
				<Shape dx={x} dy={y} random={true} angle={0} figure="S" />
			</Group>
		)
	}
}
