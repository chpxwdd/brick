import React, { Component } from 'react'
import { Group, Rect, Text } from 'react-konva'
import {
	DISPLAY_BORDER,
	DISPLAY_FILL,
	DISPLAY_STROKE,
	DISPLAY_STROKE_ALT,
	DISPLAY_CELL,
} from '../../constants/display-constants'
import { range } from '../../utils/utils'

export default class GridLayout extends Component {
	render() {
		const { x, y, width, height, rows, cols } = this.props
		return (
			<Group x={x} y={y} width={width} height={height}>
				<Rect
					x={-2 * DISPLAY_BORDER}
					y={-2 * DISPLAY_BORDER}
					width={width + 4 * DISPLAY_BORDER}
					height={height + 4 * DISPLAY_BORDER}
					fill={DISPLAY_FILL}
					stroke={DISPLAY_STROKE}
					strokeWidth={DISPLAY_BORDER}
				/>
				{/* if isset rows and cols agr */}

				{range(0, rows).map((dy, i) => {
					return range(0, cols).map((dx, j) => {
						return (
							<Group>
								<Rect
									key={[i, j]}
									x={dx * DISPLAY_CELL}
									y={dy * DISPLAY_CELL}
									width={DISPLAY_CELL}
									height={DISPLAY_CELL}
									stroke={DISPLAY_STROKE_ALT}
									strokeWidth={DISPLAY_BORDER}
								/>
								<Text x={dx * DISPLAY_CELL} y={dy * DISPLAY_CELL} />
							</Group>
						)
					})
				})}
			</Group>
		)
	}
}
