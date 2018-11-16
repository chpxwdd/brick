import React, { Component } from 'react'
import { Group, Rect, Text } from 'react-konva'
import { BORDER, FILL, STROKE_LIGHT, STROKE_DARK, CELL, STROKE_WIDTH } from '../../constants/dimention-constants'
import { range } from '../../utils/utils'

export default class GridLayout extends Component {
	render() {
		const { x, y, width, height, rows, cols } = this.props
		return (
			<Group x={x} y={y} width={width} height={height}>
				<Rect
					x={-2 * BORDER}
					y={-2 * BORDER}
					width={width + 4 * BORDER}
					height={height + 4 * BORDER}
					fill={FILL}
					stroke={STROKE_LIGHT}
					strokeWidth={BORDER}
				/>
				{/* if isset rows and cols agr */}

				{range(0, rows).map((dy, i) => {
					return range(0, cols).map((dx, j) => {
						return (
							<Group>
								<Rect
									key={[i, j]}
									x={dx * CELL}
									y={dy * CELL}
									width={CELL}
									height={CELL}
									stroke={STROKE_DARK}
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
