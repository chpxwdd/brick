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
	DISPLAY_SHAPE_FILL,
	DISPLAY_STROKE_ALT,
	// DISPLAY_STROKE_ALT,
} from '../../constants/display-constants'

import { range } from '../../utils/utils'
import Shape from '../Shape'
import GridLayout from './GridLayout'
import Board from './Board'
import NextShape from './NextShape'

class Display extends Component {
	constructor(props) {
		super(props)
		this.state = {
			x: 0,
			y: 0,
			width: DISPLAY_COLS * DISPLAY_CELL + DISPLAY_SHAPE_CELLS * DISPLAY_CELL + 3 * DISPLAY_MARGIN,
			height: DISPLAY_ROWS * DISPLAY_CELL + 2 * DISPLAY_MARGIN,
			rows: 0,
			cols: 0,
		}
	}

	render() {
		const { width, height } = this.state
		const { display } = this.props
		return (
			<div className="Display">
				<Stage width={width} height={height}>
					<Layer>
						<GridLayout {...this.state} />
						<Board board={display.board} />
						<NextShape nextShape={display.nextShape} />
					</Layer>
				</Stage>
			</div>
		)
	}
}
export default Display
