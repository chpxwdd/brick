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
import Shape from '../Shape/Shape'

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

	renderField(x = 0, y = 0, width, height, rows = 0, cols = 0) {
		return (
			<Group x={x} y={y} width={width} height={height}>
				<Rect
					x={-1 * DISPLAY_BORDER}
					y={-1 * DISPLAY_BORDER}
					width={width + 2 * DISPLAY_BORDER}
					height={height + 2 * DISPLAY_BORDER}
					fill={DISPLAY_FILL}
					stroke={DISPLAY_STROKE}
					strokeWidth={DISPLAY_BORDER}
				/>
				{range(0, rows).map((dx, i) => {
					return (
						<Group key={i} x={0} y={0}>
							{range(0, cols).map((dy, j) => {
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

	render() {
		const { display } = this.props
		return (
			<div className="Display">
				<Stage width={this.display.width} height={this.display.height}>
					{/* STATIC VIEW */}
					<Layer>
						{this.renderField(0, 0, this.display.width, this.display.height)}
						{this.renderField(
							this.board.x,
							this.board.y,
							this.board.width,
							this.board.height,
							DISPLAY_COLS,
							DISPLAY_ROWS
						)}
						{this.renderField(
							this.nextShape.x,
							this.nextShape.y,
							this.nextShape.width,
							this.nextShape.height,
							DISPLAY_SHAPE_CELLS,
							DISPLAY_SHAPE_CELLS
						)}
					</Layer>
					{/* DINAMIC */}
					<Layer>
						<Shape dx={3} dy={5} angle={0} />
					</Layer>
					<Layer>{/* BOARD RENDER VALUES */}</Layer>
				</Stage>
			</div>
		)
	}
}
export default Display
