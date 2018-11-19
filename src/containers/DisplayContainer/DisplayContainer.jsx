import React, { Component } from 'react'
import { Stage, Layer } from 'react-konva'

import GridLayout from '../../components/GridLayout'
import BoardContainer from '../../containers/BoardContainer'
import NextShapeContainer from '../../containers/NextShapeContainer'
import CurrentShapeContainer from '../../containers/CurrentShapeContainer'
import ProcessContainer from '../../containers/ProcessContainer/'
import { dimentions, BLOCK_DISPLAY } from '../../constants/dimention-constants'

class DisplayContainer extends Component {
	render() {
		return (
			<div>
				<Stage {...dimentions(BLOCK_DISPLAY)}>
					<Layer>
						<GridLayout {...dimentions(BLOCK_DISPLAY)} />
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
