import React, { Component } from 'react'
import { Group } from 'react-konva'
import Cell from '../Cell'

export default class Shape extends Component {
	constructor(props) {
		super(props)
		// let _figure = this.randomShape()
		let _figure = 'T'
		console.log('next', _figure)
		this.state = {
			figure: _figure,
			matrix: this.shapeMatrix(_figure),
			angle: 0,
			dx: this.props.dx,
			dy: this.props.dy,
		}
	}

	render() {
		const { matrix } = this.state
		const { dx, dy, fill } = this.props

		console.log(dx, dy)
		return (
			<Group x={dx} y={dy}>
				{matrix.map((line, y) => {
					return line.map((status, x) => {
						// console.log(x, y, status)
						return <Cell key={[x, y]} dx={x} dy={y} status={status} fill={fill} />
					})
				})}
			</Group>
		)
	}

	shapeList = ['I', '0', 'T', 'S', 'Z', 'L', 'J']
	randomShape = () => {
		return this.shapeList[Math.floor(Math.random() * this.shapeList.length)]
	}

	shapeMatrix = (shape, angle) => {
		switch (shape) {
			case 'I':
				return [[0, -1], [0, 1], [0, 2]]
			case 'O':
				return [[0, 1], [1, 0], [1, 1]]
			case 'T':
				return [[0, 1], [1, 0], [-1, 0], [0, 0]]
			case 'S':
				return [[0, 1], [1, 0], [-1, 1]]
			case 'Z':
				return [[0, 1], [1, 1], [-1, 0]]
			case 'L':
				return [[1, 0], [-1, 0], [-1, -1]]
			case 'J':
				return [[0, 1], [-1, 0], [1, 1]]
			default:
				return []
		}
	}

	emptyShape = [
		[2, 2],
		[1, 2],
		[0, 2],
		[-1, 2],
		[2, 1],
		[1, 1],
		[0, 1],
		[-1, 1],
		[2, 0],
		[1, 0],
		[0, 0],
		[-1, 0],
		[2, -1],
		[1, -1],
		[0, -1],
		[-1, -1],
	]
}
