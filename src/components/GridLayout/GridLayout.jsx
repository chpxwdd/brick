import React, { Component } from 'react'
import { Group, Rect, Text } from 'react-konva'
import {
	BORDER,
	LIGHT,
	DARK,
	COLOR,
	CELL,
	STROKE_WIDTH,
} from '../../constants/dimention-constants'
import { range } from '../../utils/utils'

export default class GridLayout extends Component {
	render() {
		const { x, y, width, height, rows, cols } = this.props
		return (
			<Group x={x} y={y} width={width} height={height}>
				<Rect
					// x={-2 * BORDER}
					// y={-2 * BORDER}
					// width={width + 4 * BORDER}
					// height={height + 4 * BORDER}
					x={0}
					y={0}
					width={width}
					height={height}
					fill={COLOR}
					stroke={DARK}
					strokeWidth={BORDER}
				/>
				{/* if isset rows and cols agr */}

				{range(0, rows).map((dy, i) => {
					return range(0, cols).map((dx, j) => {
						return (
							<Group key={[i, j]}>
								<Rect
									x={dx * CELL}
									y={dy * CELL}
									width={CELL}
									height={CELL}
									stroke={LIGHT}
									strokeWidth={STROKE_WIDTH}
								/>
								<Text x={dx * CELL} y={dy * CELL} />
							</Group>
						)
					})
				})}
			</Group>
		)
	}
}
