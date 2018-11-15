import React, { Component } from 'react'
import GridLayout from '../GridLayout'
import { DISPLAY_COLS, DISPLAY_ROWS, DISPLAY_MARGIN, DISPLAY_CELL } from '../../constants/display-constants'

export default class Board extends Component {
	constructor(props) {
		super(props)

		this.state = {
			x: DISPLAY_MARGIN,
			y: DISPLAY_MARGIN,
			width: DISPLAY_COLS * DISPLAY_CELL,
			height: DISPLAY_ROWS * DISPLAY_CELL,
			cols: DISPLAY_COLS,
			rows: DISPLAY_ROWS,
		}
	}

	render() {
		const { board } = this.props
		const { x, y, width, height, rows, cols } = this.state
		return <GridLayout x={x} y={y} width={width} height={height} cols={cols} rows={rows} />
	}
}
