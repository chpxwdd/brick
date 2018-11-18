import React, { Component } from 'react'
import Shape from '../Shape'
import {
	COLS,
	ROWS,
	CELL,
	SHAPE_CELLS,
	MARGIN,
} from '../../constants/dimention-constants'

import { Group } from 'react-konva'

export default class NextShape extends Component {
	render() {
		const { nextShape } = this.props

		return (
			<Group
				x={COLS * CELL + 2 * MARGIN}
				y={MARGIN + (ROWS * CELL) / 2 - (SHAPE_CELLS * CELL) / 2}
			>
				{/* <Shape dx={dx} dy={dy} matrix={matrix} /> */}
				<Shape {...nextShape} />
			</Group>
		)
	}
}
