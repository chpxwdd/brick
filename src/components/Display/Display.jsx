import React, { Component } from 'react'
import { Stage, Layer, Group, Rect } from 'react-konva'
import Cell from '../Cell'
import {
	DISPLAY_COLS,
	DISPLAY_ROWS,
	DISPLAY_CELL,
	DISPLAY_SHAPE_CELLS,
	DISPLAY_MARGIN,
	DISPLAY_FILL,
	DISPLAY_BORDER,
	DISPLAY_STROKE,
	// DISPLAY_STROKE_ALT,
} from '../../constants/display-constants'

import { range } from '../../utils/utils'

class Display extends Component {
	display = {
		width: DISPLAY_COLS * DISPLAY_CELL + DISPLAY_SHAPE_CELLS * DISPLAY_CELL + 3 * DISPLAY_MARGIN,
		height: DISPLAY_ROWS * DISPLAY_CELL + 2 * DISPLAY_MARGIN,
	}

	board = {
		x: DISPLAY_MARGIN,
		y: DISPLAY_MARGIN,
		width: DISPLAY_COLS * DISPLAY_CELL,
		height: DISPLAY_ROWS * DISPLAY_CELL,
	}

	nextShape = {
		x: this.board.width + 2 * DISPLAY_MARGIN,
		y: DISPLAY_MARGIN + this.board.height / 2 - (DISPLAY_SHAPE_CELLS * DISPLAY_CELL) / 2,
		width: DISPLAY_SHAPE_CELLS * DISPLAY_CELL,
		height: DISPLAY_SHAPE_CELLS * DISPLAY_CELL,
	}
	renderShape() {
		return (
			<Group x={this.nextShape.x} y={this.nextShape.y} width={this.nextShape.width} height={this.nextShape.height}>
				<Rect
					x={-1 * DISPLAY_BORDER}
					y={-1 * DISPLAY_BORDER}
					width={this.nextShape.width + 2 * DISPLAY_BORDER}
					height={this.nextShape.height + 2 * DISPLAY_BORDER}
					fill={DISPLAY_FILL}
					stroke={DISPLAY_STROKE}
					strokeWidth={DISPLAY_BORDER}
				/>
				{range(0, DISPLAY_SHAPE_CELLS).map((dx, i) => {
					return (
						<Group key={i} x={0} y={0}>
							{range(0, DISPLAY_SHAPE_CELLS).map((dy, j) => {
								return (
									<Group key={j} x={0} y={0}>
										<Cell dx={dx} dy={dy} status={0} />
									</Group>
								)
							})}
						</Group>
					)
				})}
			</Group>
		)
	}

	renderBoard() {
		return (
			<Group x={this.board.x} y={this.board.y} width={this.board.width} height={this.board.height}>
				<Rect
					x={-1 * DISPLAY_BORDER}
					y={-1 * DISPLAY_BORDER}
					width={this.board.width + 2 * DISPLAY_BORDER}
					height={this.board.height + 2 * DISPLAY_BORDER}
					fill={DISPLAY_FILL}
					stroke={DISPLAY_STROKE}
					strokeWidth={DISPLAY_BORDER}
				/>
				{range(0, DISPLAY_ROWS).map((row, i) => {
					return (
						<Group key={i}>
							{range(0, DISPLAY_COLS).map((col, j) => {
								return (
									<Group key={j}>
										<Cell dx={col} dy={row} status={0} />
									</Group>
								)
							})}
						</Group>
					)
				})}
			</Group>
		)
	}
	render() {
		// const { nextShape } = this.props
		return (
			<div className="Display">
				<Stage width={this.display.width} height={this.display.height}>
					<Layer>
						{/* <Rect
							x={0}
							y={0}
							width={this.display.width}
							height={this.display.height}
							fill={DISPLAY_FILL}
							stroke={DISPLAY_BORDER}
							strokeWidth={DISPLAY_STROKE}
						/> */}
						{this.renderBoard()}
						{this.renderShape()}
					</Layer>
				</Stage>
			</div>
		)
	}
}
export default Display
