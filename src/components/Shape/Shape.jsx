import React, { Component } from 'react'
import { Group } from 'react-konva'
import Cell from '../Cell'
import { CELL } from '../../constants/dimention-constants'

export default class Shape extends Component {
	render() {
		const { dx = 0, dy = 0, matrix } = this.props
		return (
			<Group x={dx * CELL} y={dy * CELL}>
				{matrix.map((line, coordY) => {
					return line.map((status, coordX) => {
						return <Cell key={[coordX, coordY]} dx={coordX} dy={coordY} status={status} />
					})
				})}
			</Group>
		)
	}
}
