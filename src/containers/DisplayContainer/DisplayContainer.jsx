import React, { Component } from 'react'
import { Stage, Layer } from 'react-konva'
import {
	COLS,
	ROWS,
	CELL,
	SHAPE_CELLS,
	MARGIN,
} from '../../constants/dimention-constants'

import BoardContainer from '../../containers/BoardContainer'
import NextShapeContainer from '../../containers/NextShapeContainer'
import GridLayout from '../../components/GridLayout'

class DisplayContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			x: 0,
			y: 0,
			width: COLS * CELL + SHAPE_CELLS * CELL + 3 * MARGIN,
			height: ROWS * CELL + 2 * MARGIN,
		}
	}

	render() {
		const { x, y, width, height } = this.state
		return (
			<div>
				<Stage width={width} height={height}>
					<Layer>
						<GridLayout x={x} y={y} width={width} height={height} />
					</Layer>
					<BoardContainer />
					<NextShapeContainer />
				</Stage>
			</div>
		)
	}
}

export default DisplayContainer
