import React, { Component } from 'react'
import { Group, Rect /*, Text */ } from 'react-konva'
import {
	DISPLAY_CELL,
	DISPLAY_BORDER,
	DISPLAY_STROKE,
	DISPLAY_STROKE_ALT,
	DISPLAY_FILL,
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
					fill={DISPLAY_FILL}
					strokeWidth={DISPLAY_BORDER}
					stroke={status === 0 ? DISPLAY_STROKE_ALT : DISPLAY_STROKE}
				/>
				{/* <Rect
					x={3 * DISPLAY_BORDER}
					y={3 * DISPLAY_BORDER}
					width={DISPLAY_CELL - 6 * DISPLAY_BORDER}
					height={DISPLAY_CELL - 6 * DISPLAY_BORDER}
					fill={DISPLAY_FILL}
					strokeWidth={DISPLAY_BORDER}
					stroke={status == 0 ? DISPLAY_STROKE_ALT : DISPLAY_STROKE}
				/> */}
				{/* {debug ? <Text x={DISPLAY_CELL / 3.3} y={DISPLAY_CELL / 4} text={1} /> : {}} */}
			</Group>
		)
	}
}
export default Cell
