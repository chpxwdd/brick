import React, { Component } from 'react'
import { Group, Rect, Text } from 'react-konva'
import {
	CELL,
	BORDER,
	STROKE_WIDTH,
	COLOR,
	DARK,
	LIGHT,
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
					fill={status ? COLOR : null}
					strokeWidth={status ? STROKE_WIDTH : 0}
					stroke={status ? DARK : null}
				/>
				<Rect
					x={2 * BORDER}
					y={2 * BORDER}
					width={CELL - 4 * BORDER}
					height={CELL - 4 * BORDER}
					fill={status ? DARK : LIGHT}
					strokeWidth={status ? STROKE_WIDTH / 2 : 0}
					stroke={status ? COLOR : null}
				/>
				<Text
					x={4 * BORDER}
					y={4 * BORDER}
					text={String(dx + ':' + dy)}
					// text={String(status)}
					fontSize={CELL / 3.3}
				/>
			</Group>
		)
	}
}
export default Cell
