import React, { Component } from 'react'
import { Stage, Layer } from 'react-konva'

import Display from '../../components/Display'
import BoardContainer from '../../containers/BoardContainer'
import NextShapeContainer from '../../containers/NextShapeContainer'
import CurrentShapeContainer from '../../containers/CurrentShapeContainer'
import ProcessContainer from '../../containers/ProcessContainer/'
import {
	COLS,
	CELL,
	MARGIN,
	SHAPE_CELLS,
	ROWS,
} from '../../constants/dimention-constants'

class DisplayContainer extends Component {
	render() {
		return (
			<div>
				<Stage
					width={COLS * CELL + SHAPE_CELLS * CELL + 3 * MARGIN}
					height={ROWS * CELL + 2 * MARGIN}
				>
					<Layer>
						<Display />
						<ProcessContainer />
						<BoardContainer />
						<NextShapeContainer />
						<CurrentShapeContainer />
					</Layer>
				</Stage>
			</div>
		)
	}
}

export default DisplayContainer
