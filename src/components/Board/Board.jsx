import React, { Component } from 'react'
import { Group } from 'react-konva'
import Cell from '../Cell'
import { dimentions } from '../../utils/utils'
import { BLOCK_BOARD } from '../../constants/dimention-constants'

export default class Board extends Component {
	render() {
		const { board } = this.props
		return (
			<Group x={dimentions(BLOCK_BOARD).x} y={dimentions(BLOCK_BOARD).y}>
				{board.map((line, coordY) => {
					return line.map((status, coordX) => {
						return (
							<Cell key={[coordX, coordY]} dx={coordX} dy={coordY} status={status} />
						)
					})
				})}
			</Group>
		)
	}
}
