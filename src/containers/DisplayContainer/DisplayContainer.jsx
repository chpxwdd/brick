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
import ProcessContainer from '../ProcessContainer'

class DisplayContainer extends Component {
	dimentions = {
		width: COLS * CELL + SHAPE_CELLS * CELL + 3 * MARGIN,
		height: ROWS * CELL + 2 * MARGIN,
	}

	render() {
		const { width, height } = this.dimentions
		return (
			<div>
				<Stage width={width} height={height}>
					<Layer>
						<GridLayout x={0} y={0} width={width} height={height} />
					</Layer>
					<BoardContainer />
					<NextShapeContainer />
					<ProcessContainer />
				</Stage>
			</div>
		)
	}
}

export default DisplayContainer
