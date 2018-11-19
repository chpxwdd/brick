import React, { Component } from 'react'
import { Group } from 'react-konva'
import {
	COLS,
	ROWS,
	CELL,
	SHAPE_CELLS,
	MARGIN,
} from '../../constants/dimention-constants'
import GridLayout from '../../components/GridLayout'

export default class Display extends Component {
	constructor(props) {
		super(props)

		this.state = {
			x: 0,
			y: 0,
			width: COLS * CELL + SHAPE_CELLS * CELL + 3 * MARGIN,
			height: ROWS * CELL + 2 * MARGIN,
		}
	}

	render() {
		const { x, y, width, height } = this.state
		return (
			<Group>
				<GridLayout x={x} y={y} width={width} height={height} />
				{/* <Shape dx={dx} dy={dy} matrix={matrix} /> */}
			</Group>
		)
	}
}
