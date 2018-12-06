import React, { Component } from 'react'
import { Stage, Layer, Group } from 'react-konva'
import { dimentions } from '../../utils/utils'
import { BLOCK_DISPLAY, BLOCK_NEXT_SHAPE, BLOCK_BOARD, BLOCK_PROCESS } from '../../constants/dimention-constants'
import { STOP } from '../../constants/game-constants'
import GridLayout from '../../components/GridLayout'
import BoardContainer from '../../containers/BoardContainer'
import CurrentShapeContainer from '../../containers/CurrentShapeContainer'
import NextShapeContainer from '../../containers/NextShapeContainer'
import ProcessContainer from '../../containers/ProcessContainer'
export default class Tetris extends Component {
	render() {
		return (
			<Stage {...dimentions(BLOCK_DISPLAY)}>
				<Layer>
					<GridLayout {...dimentions(BLOCK_DISPLAY)} />
					<GridLayout {...dimentions(BLOCK_NEXT_SHAPE)} />
					<GridLayout {...dimentions(BLOCK_BOARD)} />
				</Layer>
				{this.props.game !== STOP && (
					<Layer>
						<Group x={dimentions(BLOCK_PROCESS).x} y={dimentions(BLOCK_PROCESS).y}>
							<ProcessContainer />
						</Group>
						<Group x={dimentions(BLOCK_NEXT_SHAPE).x} y={dimentions(BLOCK_NEXT_SHAPE).y}>
							<NextShapeContainer />
						</Group>
						<Group x={dimentions(BLOCK_BOARD).x} y={dimentions(BLOCK_BOARD).y}>
							<BoardContainer />
							<CurrentShapeContainer />
						</Group>
					</Layer>
				)}
			</Stage>
		)
	}
}
