import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionGameUpdate } from '../../actions/game-actions'
import {
	actionNextShapeUpdate,
	actionNextShapeReset,
} from '../../actions/next-shape-actions'
import {
	actionCurrentShapeUpdate,
	actionCurrentShapeReset,
} from '../../actions/current-shape-actions'
import {
	actionBoardUpdate,
	actionBoardReset,
} from '../../actions/board-actions'
import {
	actionProcessUpdate,
	actionProcessUpdateLines,
	actionProcessUpdateScore,
	actionProcessUpdateSpeed,
} from '../../actions/process-actions'
import { Stage, Layer, Group } from 'react-konva'
import { Grid, Row, Col } from 'react-bootstrap'
import GridLayout from '../../components/GridLayout'
import Control from '../../components/Control'
import Process from '../../components/Process'
import NextShape from '../../components/NextShape'
import CurrentShape from '../../components/CurrentShape'
import Board from '../../components/Board'
import { dimentions } from '../../utils/utils'
import {
	MARGIN,
	BLOCK_DISPLAY,
	BLOCK_NEXT_SHAPE,
	BLOCK_BOARD,
} from '../../constants/dimention-constants'
import '../../index.css'

class GameContainer extends Component {
	render() {
		const {
			game,
			gameUpdate,
			board,
			boardUpdate,
			boardReset,
			currentShape,
			currentShapeUpdate,
			currentShapeReset,
			nextShape,
			nextShapeUpdate,
			nextShapeReset,
			process,
			processUpdate,
			scoreUpdate,
			speedUpdate,
			linesUpdate,
		} = this.props
		return (
			<div className={game}>
				<Grid>
					<Row>
						<Col xs={12} style={{ margin: MARGIN }}>
							<Stage {...dimentions(BLOCK_DISPLAY)}>
								<Layer>
									<GridLayout {...dimentions(BLOCK_DISPLAY)} />
									<GridLayout {...dimentions(BLOCK_NEXT_SHAPE)} />
									<GridLayout {...dimentions(BLOCK_BOARD)} />
								</Layer>
								<Layer>
									<NextShape {...nextShape} />
									<Process game={game} process={process} />
									<Group x={dimentions(BLOCK_BOARD).x} y={dimentions(BLOCK_BOARD).y}>
										<Board board={board} />
										<CurrentShape {...currentShape} />
									</Group>
								</Layer>
							</Stage>

							<hr />
							<Control {...this.props} />
							<hr />
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

const mapStateToProps = store => {
	return {
		game: store.game,
		process: store.process,
		board: store.board,
		nextShape: store.nextShape,
		currentShape: store.currentShape,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		gameUpdate: bindActionCreators(actionGameUpdate, dispatch),
		boardUpdate: bindActionCreators(actionBoardUpdate, dispatch),
		boardReset: bindActionCreators(actionBoardReset, dispatch),
		nextShapeUpdate: bindActionCreators(actionNextShapeUpdate, dispatch),
		nextShapeReset: bindActionCreators(actionNextShapeReset, dispatch),
		currentShapeUpdate: bindActionCreators(actionCurrentShapeUpdate, dispatch),
		currentShapeReset: bindActionCreators(actionCurrentShapeReset, dispatch),
		processUpdate: bindActionCreators(actionProcessUpdate, dispatch),
		speedUpdate: bindActionCreators(actionProcessUpdateSpeed, dispatch),
		scoreUpdate: bindActionCreators(actionProcessUpdateScore, dispatch),
		linesUpdate: bindActionCreators(actionProcessUpdateLines, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameContainer)
// export default GameContainer
