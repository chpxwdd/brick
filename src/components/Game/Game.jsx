import React, { Component } from 'react'
import { Stage, Layer, Group } from 'react-konva'
import { dimentions } from '../../utils/utils'
import { BLOCK_DISPLAY, BLOCK_NEXT_SHAPE, BLOCK_BOARD, BLOCK_PROCESS } from '../../constants/dimention-constants'
import GridLayout from '../../components/GridLayout'
import BoardContainer from '../../containers/BoardContainer'
import CurrentShapeContainer from '../../containers/CurrentShapeContainer'
import NextShapeContainer from '../../containers/NextShapeContainer'
import ProcessContainer from '../../containers/ProcessContainer'
import { STOP } from '../../constants/game-constants'

export default class Game extends Component {
	// constructor(props) {		super(props)
	// 		this.state = { lines: 0, score: 0, speed: null }
	// }
	// componentDidMount() {		console.log('Game componentDidMount')	}
	// componentWillUpdate() {		console.log('Game componentWillUpdate')	}
	// componentWillReceiveProps() {		console.log('Game componentWillReceiveProps')	}
	// componentDidUpdate() {		console.log('Game componentDidUpdate')	}
	// componentWillUnmount() {		console.log('Game componentWillUnmount')	}

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
