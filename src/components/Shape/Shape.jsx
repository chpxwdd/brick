import React, { Component } from 'react'
import { Group } from 'react-konva'
import Cell from '../Cell'
import { shapeList, shapeMatrix, rotateShape, moveShape } from '../../utils/shape-utils'

export default class Shape extends Component {
	constructor(props) {
		super(props)
		// let _figure = this.randomShape(shapeList)
		let _figure = 'T'
		console.log('next', _figure)
		this.state = {
			figure: _figure,
			matrix: shapeMatrix(_figure),
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

	randomShape = items => {
		return items[Math.floor(Math.random() * items.length)]
	}
}
