import React, { Component } from 'react'
import { Group } from 'react-konva'
import Cell from '../Cell'

export default class Board extends Component {
	render() {
		const { board } = this.props
		return (
			<Group>
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
