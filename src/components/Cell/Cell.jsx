import React, { Component } from 'react'
import { Group, Rect, Text } from 'react-konva'
import { FIELD_CELL, FIELD_BORDER, FIELD_STROKE, FIELD_STROKE_ALT, FIELD_FILL } from '../../constants/field-constants'

class Cell extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: 0,
			key: [0, 0],
		}
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
					stroke={FIELD_STROKE}
				/>
				<Text x={FIELD_CELL / 3.33} y={FIELD_CELL / 3.33} text={this.props.value} />
			</Group>
		)
	}
}
export default Cell
