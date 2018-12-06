import React, { Component } from 'react'
import { Group } from 'react-konva'
import Cell from '../Cell'
import { CELL } from '../../constants/dimention-constants'

export default class Shape extends Component {
	componentDidMount() {
		console.log(this.props)
	}
	render() {
		const { dx, dy, matrix } = this.props
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
