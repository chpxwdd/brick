import React, { Component } from 'react'
import { Stage, Layer, Group } from 'react-konva'
import { dimentions } from '../../utils/utils'
import { BLOCK_DISPLAY, BLOCK_NEXT_SHAPE, BLOCK_BOARD, BLOCK_PROCESS } from '../../constants/dimention-constants'
import GridLayout from '../../components/GridLayout'
import BoardContainer from '../../containers/BoardContainer'
import CurrentShapeContainer from '../../containers/CurrentShapeContainer'
import NextShapeContainer from '../../containers/NextShapeContainer'
import ProcessContainer from '../../containers/ProcessContainer'
import { RUN, PAUSE, STOP } from '../../constants/game-constants'

export default class Game extends Component {
	constructor(props) {
		super(props)
		this.state = { interval: null }
	}

	// componentWillMount() {	}
	componentDidMount() {
		this.setState({
			interval: setInterval(() => {
				this.loop()
			}, 1100 - 100 * this.props.process.speed),
		})
	}

	componentWillUpdate() {
		console.log('Game componentWillUpdate')
	}

	componentDidUpdate() {
		console.log('Game componentDidUpdate')
	}

	componentWillUnmount() {
		console.log('Game componentWillUnmount')
		clearInterval(this.state.interval)
	}

	loop = () => {
		if (this.props.game !== RUN) {
			return
		}
		this.props.moveDown(this.props.currentShape.dy)
	}

	renderBoard() {
		return (
			<Group x={dimentions(BLOCK_BOARD).x} y={dimentions(BLOCK_BOARD).y}>
				<BoardContainer />
				<CurrentShapeContainer />
			</Group>
		)
	}

	renderNextShape() {
		return (
			<Group x={dimentions(BLOCK_NEXT_SHAPE).x} y={dimentions(BLOCK_NEXT_SHAPE).y}>
				<NextShapeContainer />
			</Group>
		)
	}

	renderProcess() {
		return (
			<Group x={dimentions(BLOCK_PROCESS).x} y={dimentions(BLOCK_PROCESS).y}>
				<ProcessContainer />
			</Group>
		)
	}

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
						{this.renderProcess()}
						{this.renderNextShape()}
						{this.renderBoard()}
					</Layer>
				)}
			</Stage>
		)
	}
}
