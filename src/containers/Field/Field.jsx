import React, { Component } from 'react'
import { Stage, Layer, Rect, Group } from 'react-konva'
import { FIELD_BORDER, FIELD_CELL, FIELD_STROKE, FIELD_FILL } from '../../constants/field-constants'
import { range } from '../../utils/utils'
import Cell from '../../components/Cell'

class Field extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentSituation: [],
			debug: false,
		}
	}

	componentDidMount() {
		const matrix = []
		const { cols, rows } = this.props

		range(0, rows).map((dx, i) => {
			const row = []
			range(0, cols).map((dy, j) => {
				row.push({ i, j })
			})

			matrix.push(row)
		})
		this.setState({ matrix: matrix })
	}

	getMatrix = () => {
		this.getState('matrix')
	}

	dimentions = (cols, rows = null) => {
		return {
			width: FIELD_CELL * cols + FIELD_BORDER * 4,
			height: FIELD_CELL * (rows ? rows : cols) + FIELD_BORDER * 4,
		}
	}

	render() {
		const { cols, rows, active, debug } = this.props
		const { width, height } = this.dimentions(cols, rows)

		return (
			<Group width={width} height={height} />

			// <Layer>
			// 	<Group x={2 * FIELD_BORDER} y={2 * FIELD_BORDER}>
			// 		{range(0, cols).map((dx, i) => {
			// 			return range(0, rows).map((dy, j) => {
			// 				return <Cell key={[i, j]} dx={dx} dy={dy} active={active} debug={debug} />
			// 			})
			// 		})}
			// 	</Group>
			// </Layer>
		)
	}
}

export default Field
