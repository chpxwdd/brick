import React, { Component } from 'react'
import { Group, Rect, Text } from 'react-konva'
import {
	DISPLAY_CELL,
	DISPLAY_BORDER,
	DISPLAY_STROKE,
	DISPLAY_STROKE_ALT,
	DISPLAY_FILL,
	DISPLAY_SHAPE_FILL,
} from '../../constants/display-constants'

class Cell extends Component {
	render() {
		const { dx, dy, status } = this.props

		return (
			<Group x={dx * DISPLAY_CELL} y={dy * DISPLAY_CELL}>
				<Rect
					x={DISPLAY_BORDER}
					y={DISPLAY_BORDER}
					width={DISPLAY_CELL - 2 * DISPLAY_BORDER}
					height={DISPLAY_CELL - 2 * DISPLAY_BORDER}
					fill={status ? '#999' : null}
					strokeWidth={status ? DISPLAY_STROKE_ALT : 0}
					stroke={status ? DISPLAY_STROKE_ALT : null}
				/>
			</Group>
		)
	}
}
export default Cell
