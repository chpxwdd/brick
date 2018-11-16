import React, { Component } from 'react'
import GridLayout from '../GridLayout'
import { COLS, ROWS, MARGIN, CELL } from '../../constants/dimention-constants'

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
		const { x, y, width, height, rows, cols } = this.state
		return <GridLayout x={x} y={y} width={width} height={height} cols={cols} rows={rows} />
	}
}
