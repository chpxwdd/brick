import React, { Component } from 'react'
import { Group, Rect } from 'react-konva'
import { FIELD_CELL, FIELD_BORDER, FIELD_STROKE, FIELD_STROKE_ALT, FIELD_FILL } from '../../constants/field-constants'

class Cell extends Component {
	constructor(props) {
		super(props)
		this.state = { active: false }
	}

	render() {
		const { key, dx, dy, active } = this.props

		return (
			<Group x={dx * FIELD_CELL} y={dy * FIELD_CELL} adress={key} actrive={active}>
				<Rect
					x={FIELD_BORDER}
					y={FIELD_BORDER}
					width={FIELD_CELL - 2 * FIELD_BORDER}
					height={FIELD_CELL - 2 * FIELD_BORDER}
					fill={FIELD_FILL}
					strokeWidth={FIELD_BORDER}
					stroke={active ? FIELD_STROKE : FIELD_STROKE_ALT}
				/>
				<Rect
					x={FIELD_BORDER * 2}
					y={FIELD_BORDER * 2}
					width={FIELD_CELL - 4 * FIELD_BORDER}
					height={FIELD_CELL - 4 * FIELD_BORDER}
					fill={active ? FIELD_STROKE : FIELD_STROKE_ALT}
				/>
			</Group>
		)
	}
}
export default Cell
