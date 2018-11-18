import React, { Component } from 'react'
import { Group } from 'react-konva'
import Cell from '../Cell'

export default class Board extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { board } = this.props
		return (
			<Group x={0} y={0}>
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
