import React, { Component } from 'react'
import { Stage, Layer, Group } from 'react-konva'
import Cell from '../Cell'
import { range } from '../../utils/utils'
class Shape extends Component {
	// skeleton = [[2, 2],[1, 2],[0, 2],[-1, 2],[2, 1],[1, 1],[0, 1],[-1, 1],[2, 0],[1, 0],[0, 0],[-1, 0],[2, -1],[1, -1],[0, -1],[-1, -1]]

	/** MAIN  */
	frame = []
	shapes = shape => {
		switch (shape) {
			case 'I':
				return [[0, -1], [0, 1], [0, 2]]
			case 'O':
				return [[0, 1], [1, 0], [1, 1]]
			case 'T':
				return [[0, 1], [1, 0], [-1, 0]]
			case 'S':
				return [[0, 1], [1, 0], [-1, 1]]
			case 'Z':
				return [[0, 1], [1, 1], [-1, 0]]
			case 'L':
				return [[1, 0], [-1, 0], [-1, -1]]
			case 'J':
				return [[1, 0], [-1, 0], [1, 1]]
			default:
				return []
		}
	}
	render() {
		return (
			<div>
				<Stage width={80} height={80}>
					<Layer>
						<Group x={0} y={0}>
							{range(0, 4).map((dx, i) => {
								return (
									<Group key={i} x={0} y={0}>
										{range(0, 4).map((dy, j) => {
											return (
												<Group key={j}>
													<Cell dx={dx} dy={dy} status={0} debug={true} />
												</Group>
											)
										})}
									</Group>
								)
							})}
						</Group>
					</Layer>
				</Stage>
			</div>
		)
	}
}

export default Shape
