import React, { Component } from 'react'
import { Group } from 'react-konva'
import Cell from '../Cell'

class Display extends Component {
	render() {
		const { board } = this.props

		return (
			<Group x={0} y={0}>
				{board.map((lines, i) => {
					return (
						<Group key={i}>
							{lines.map((cell, j) => {
								return (
									<Group key={j}>
										<Cell dx={cell.dx} dy={cell.dy} status={cell.status} />
									</Group>
								)
							})}
						</Group>
					)
				})}
			</Group>
		)
	}
}

export default Display
