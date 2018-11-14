import React, { Component } from 'react'
import { Group, Rect, Text } from 'react-konva'
import { FIELD_CELL, FIELD_BORDER, FIELD_STROKE, FIELD_STROKE_ALT, FIELD_FILL } from '../../constants/field-constants'

class Cell extends Component {
	render() {
		const { dx, dy, status, debug } = this.props

		return (
			<Group x={dx * FIELD_CELL} y={dy * FIELD_CELL}>
				<Rect
					x={FIELD_BORDER}
					y={FIELD_BORDER}
					width={FIELD_CELL - 2 * FIELD_BORDER}
					height={FIELD_CELL - 2 * FIELD_BORDER}
					fill={FIELD_FILL}
					strokeWidth={FIELD_BORDER}
					stroke={status == 0 ? FIELD_STROKE_ALT : FIELD_STROKE}
				/>
				{/* <Rect
					x={3 * FIELD_BORDER}
					y={3 * FIELD_BORDER}
					width={FIELD_CELL - 6 * FIELD_BORDER}
					height={FIELD_CELL - 6 * FIELD_BORDER}
					fill={FIELD_FILL}
					strokeWidth={FIELD_BORDER}
					stroke={status == 0 ? FIELD_STROKE_ALT : FIELD_STROKE}
				/> */}
				{/* {debug ? <Text x={FIELD_CELL / 3.3} y={FIELD_CELL / 4} text={1} /> : {}} */}
			</Group>
		)
	}
}
export default Cell
