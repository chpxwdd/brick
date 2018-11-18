import React, { Component } from 'react'
import { DARK } from '../../constants/dimention-constants'
import { Group } from 'react-konva'
import Cell from '../Cell'
import CurrentShape from '../CurrentShape/CurrentShape'

export default class Board extends Component {
	constructor(props) {
		super(props)
		this.state = {
			x: 0,
			y: 0,
		}
	}
	render() {
		const {
			board,
			currentShape,
			currentShapeUpdate,
			boardUpdate,
		} = this.props
		const { x, y } = this.state
		return (
			<Group x={x} y={y}>
				<CurrentShape {...currentShape} />

				{board.map((line, coordY) => {
					return line.map((status, coordX) => {
						return (
							<Cell
								key={[coordX, coordY]}
								dx={coordX}
								dy={coordY}
								status={status}
							/>
						)
					})
				})}
			</Group>
		)
	}
}
