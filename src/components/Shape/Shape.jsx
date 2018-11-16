import React, { Component } from 'react'
import { Group } from 'react-konva'
import Cell from '../Cell'
import { FILL_DARK } from '../../constants/dimention-constants'

export default class Shape extends Component {
	componentDidMount() {}

	render() {
		const { dx, dy, matrix } = this.props

		return (
			<Group x={dx} y={dy}>
				{matrix.map((line, coordY) => {
					return line.map((status, coordX) => {
						return <Cell key={[coordX, coordY]} dx={coordX} dy={coordY} status={status} fill={FILL_DARK} />
					})
				})}
			</Group>
		)
	}

	randomShape = items => {
		return items[Math.floor(Math.random() * items.length)]
	}
}
