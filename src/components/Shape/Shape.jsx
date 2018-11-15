import React, { Component } from 'react'
import { Group } from 'react-konva'
import Cell from '../Cell'
import { range } from '../../utils/utils'
import { emptyShape, randomShape, shapeMatrix, shapeList } from '../../utils/shape-utils'
import { DISPLAY_SHAPE_FILL, DISPLAY_SHAPE_CELLS, DISPLAY_CELL } from '../../constants/display-constants'
class Shape extends Component {
	constructor(props) {
		super(props)
		this.state = {
			figure: 'T',
			matrix: [[1, 0], [1, 1], [1, 0]],
			fill: DISPLAY_SHAPE_FILL,
			angle: 0,
			dx: this.props.dx,
			dy: this.props.dy,
		}
	}

	render() {
		const { matrix, figure } = this.state
		const { dx, dy } = this.props

		console.log(dx, dy)
		return (
			<Group x={dx} y={dy}>
				{matrix.map((line, y) => {
					return line.map((status, x) => {
						console.log(x, y, status)
						return <Cell key={[x, y]} dx={x} dy={y} status={status} />
					})
				})}
			</Group>
		)
	}
}

export default Shape
