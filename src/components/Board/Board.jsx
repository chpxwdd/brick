import React, { Component } from 'react'
import { COLS, ROWS, CELL, COLOR, DARK, LIGHT } from '../../constants/dimention-constants'
import { Group } from 'react-konva'
import GridLayout from '../GridLayout'
import Cell from '../Cell'

export default class Board extends Component {
	constructor(props) {
		super(props)

		this.state = {
			x: 0,
			y: 0,
			width: COLS * CELL,
			height: ROWS * CELL,
			cols: COLS,
			rows: ROWS,
		}
	}

	render() {
		const { board } = this.props
		const { x, y } = this.state
		return (
			<Group x={x} y={x}>
				<GridLayout {...this.state} />
				<Group x={x} y={y}>
					{board.map((line, coordY) => {
						return line.map((status, coordX) => {
							return <Cell key={[coordX, coordY]} dx={coordX} dy={coordY} status={status} fill={COLOR} />
						})
					})}
				</Group>
			</Group>
		)
	}
}
