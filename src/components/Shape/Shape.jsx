import React, { Component } from 'react'
import { Group } from 'react-konva'
import Cell from '../Cell'
import { range } from '../../utils/utils'
import { emptyShape, randomShape, shapeMatrix, shapeList } from '../../utils/shape-utils'
import { DISPLAY_SHAPE_FILL, DISPLAY_SHAPE_CELLS } from '../../constants/display-constants'
class Shape extends Component {
	constructor(props) {
		super(props)
		this.state = {
			figure: '',
			matrix: [],
			fill: DISPLAY_SHAPE_FILL,
			angle: 0,
			dx: 0,
			dy: 0,
		}
	}

	componentDidMount() {
		const { dx, dy, angle } = this.props

		const figure = randomShape(shapeList)

		this.setState({
			figure: figure,
			matrix: shapeMatrix[figure],
			dx: this.props.dx,
			dy: this,
		})
		console.log(this.state)
	}

	render() {
		const { matrix, figure } = this.state
		const { dx, dy } = this.props

		return (
			<Group x={0} y={0}>
				{matrix &&
					matrix.forEach((row, i) => {
						return (
							<Group key={i} x={0} y={0}>
								{row.map((col, j) => {
									return (
										<Group key={j}>
											<Cell dx={i * dx} dy={j * dy} status={0} />
										</Group>
									)
								})}
							</Group>
						)
					})}
				}
			</Group>
		)
	}
}

export default Shape
