import React, { Component } from 'react'
import { Stage, Layer } from 'react-konva'

import GridLayout from '../../components/GridLayout'
import BoardContainer from '../../containers/BoardContainer'
import NextShapeContainer from '../../containers/NextShapeContainer'
import CurrentShapeContainer from '../../containers/CurrentShapeContainer'
import ProcessContainer from '../../containers/ProcessContainer/'
import { dimentions } from '../../utils/utils'
import { BLOCK_DISPLAY } from '../../constants/dimention-constants'

export default class Display extends Component {
	render() {
		return (
			<div>
				<Stage {...dimentions(BLOCK_DISPLAY)}>
					<Layer>
						<GridLayout {...dimentions(BLOCK_DISPLAY)} />
						<NextShapeContainer />
						<ProcessContainer />
					</Layer>
					<Layer>
						<BoardContainer />
						<CurrentShapeContainer />
					</Layer>
				</Stage>
			</div>
		)
	}
}
