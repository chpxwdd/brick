import React, { Component } from 'react'
import { Group, Rect, Text } from 'react-konva'
import {
	CELL,
	BORDER,
	STROKE_WIDTH,
	STROKE_LIGHT,
	STROKE_DARK,
	FILL,
	FILL_LIGHT,
	FILL_DARK,
} from '../../constants/dimention-constants'

class Cell extends Component {
	render() {
		const { dx, dy, status } = this.props

		return (
			<Group x={dx * CELL} y={dy * CELL}>
				<Rect
					x={BORDER}
					y={BORDER}
					width={CELL - 2 * BORDER}
					height={CELL - 2 * BORDER}
					fill={status ? FILL_DARK : null}
					strokeWidth={status ? STROKE_WIDTH : 0}
					stroke={status ? STROKE_DARK : null}
				/>
			</Group>
		)
	}
}
export default Cell
