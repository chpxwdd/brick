import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Stage, Layer, Group } from 'react-konva'
import { dimentions } from '../../utils/utils'
import { BLOCK_DISPLAY, BLOCK_NEXT_SHAPE, BLOCK_BOARD, BLOCK_PROCESS } from '../../constants/dimention-constants'
import { Grid, Row, Col } from 'react-bootstrap'
import { STOP } from '../../constants/game-constants'
import * as boardActions from '../../actions/board-actions'
import * as gameActions from '../../actions/game-actions'
import * as currentShapeActions from '../../actions/current-shape-actions'
import * as nextShapeActions from '../../actions/next-shape-actions'
import * as processActions from '../../actions/process-actions'
import Process from '../../components/Process'
import Control from '../../components/Control'
import GridLayout from '../../components/GridLayout'
import NextShape from '../../components/NextShape'
import Board from '../../components/Board'
import CurrentShape from '../../components/CurrentShape'
import ManipulateHandler from '../../components/ManipulateHandler'
import Shape from '../../components/Shape'

class GameContainer extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Row>
						<Col xs={12} style={{ margin: '50px' }}>
							<Stage {...dimentions(BLOCK_DISPLAY)}>
								<Layer>
									<GridLayout {...dimentions(BLOCK_DISPLAY)} />
									<GridLayout {...dimentions(BLOCK_NEXT_SHAPE)} />
									<GridLayout {...dimentions(BLOCK_BOARD)} />
								</Layer>
								{this.props.game !== STOP && (
									<Layer>
										<Group x={dimentions(BLOCK_PROCESS).x} y={dimentions(BLOCK_PROCESS).y}>
											<Process
												speed={this.props.process.speed}
												score={this.props.process.score}
												lines={this.props.process.lines}
												speedUpdate={this.props.speedUpdate}
											/>
										</Group>
										<Group x={dimentions(BLOCK_NEXT_SHAPE).x} y={dimentions(BLOCK_NEXT_SHAPE).y}>
											<NextShape {...this.props} />
										</Group>
										<Group x={dimentions(BLOCK_BOARD).x} y={dimentions(BLOCK_BOARD).y}>
											<Board {...this.props} />
											<CurrentShape {...this.props} />
											<ManipulateHandler {...this.props} />
										</Group>
									</Layer>
								)}
							</Stage>
							<hr />
							<Control updateGame={this.props.updateGame} game={this.props.game} />
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
		board: store.board,
		process: store.process,
		currentShape: store.currentShape,
		nextShape: store.nextShape,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateGame: bindActionCreators(gameActions.actionGameUpdate, dispatch),
		updateSpeed: bindActionCreators(processActions.actionProcessUpdateSpeed, dispatch),
		updateScore: bindActionCreators(processActions.actionProcessUpdateScore, dispatch),
		updateLines: bindActionCreators(processActions.actionProcessUpdateLines, dispatch),
		updateProcess: bindActionCreators(processActions.actionProcessUpdate, dispatch),
		resetBoard: bindActionCreators(boardActions.actionBoardReset, dispatch),
		updateBoard: bindActionCreators(boardActions.actionBoardUpdate, dispatch),
		resetNextShape: bindActionCreators(nextShapeActions.actionNextShapeReset, dispatch),
		updateNextShape: bindActionCreators(nextShapeActions.actionNextShapeUpdate, dispatch),
		resetCurrentShape: bindActionCreators(currentShapeActions.actionCurrentShapeReset, dispatch),
		updateCurrentShape: bindActionCreators(currentShapeActions.actionCurrentShapeUpdate, dispatch),
		moveDown: bindActionCreators(currentShapeActions.actionCurrentShapeMoveDown, dispatch),
		moveRight: bindActionCreators(currentShapeActions.actionCurrentShapeMoveRight, dispatch),
		moveLeft: bindActionCreators(currentShapeActions.actionCurrentShapeMoveLeft, dispatch),
		rotateLeft: bindActionCreators(currentShapeActions.actionCurrentShapeRotateLeft, dispatch),
		rotateRight: bindActionCreators(currentShapeActions.actionCurrentShapeRotateRight, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameContainer)
