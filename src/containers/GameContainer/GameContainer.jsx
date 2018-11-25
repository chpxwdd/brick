import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as gameActions from '../../actions/game-actions'
import * as processActions from '../../actions/process-actions'
import * as boardActions from '../../actions/board-actions'
import * as currentShapeActions from '../../actions/current-shape-actions'
import * as nextShapeActions from '../../actions/next-shape-actions'
import { Stage, Layer, Group, Text } from 'react-konva'
import { Grid, Row, Col } from 'react-bootstrap'
import {
	MARGIN,
	BLOCK_DISPLAY,
	BLOCK_NEXT_SHAPE,
	BLOCK_BOARD,
	BLOCK_PROCESS,
} from '../../constants/dimention-constants'
import { dimentions } from '../../utils/utils'
import '../../index.css'
import GridLayout from '../../components/GridLayout'
import BoardContainer from '../../containers/BoardContainer'
import CurrentShapeContainer from '../../containers/CurrentShapeContainer'
import NextShapeContainer from '../../containers/NextShapeContainer'
import Control from '../../components/Control'

class GameContainer extends Component {
	render() {
		const { game, gameUpdate, speed, score, lines } = this.props
		return (
			<div>
				<Grid>
					<Row>
						<Col xs={12} style={{ margin: MARGIN }}>
							<Stage {...dimentions(BLOCK_DISPLAY)}>
								<Layer>
									<GridLayout {...dimentions(BLOCK_DISPLAY)} />
									<Group x={dimentions(BLOCK_PROCESS).x} y={dimentions(BLOCK_PROCESS).y}>
										<Text x={0} y={0} text="status" />
										<Text x={50} y={0} text={game} />
										<Text x={0} y={15} text="speed" />
										<Text x={50} y={15} text={String(speed)} />
										<Text x={0} y={30} text="lines" />
										<Text x={50} y={30} text={String(lines)} />
										<Text x={0} y={45} text="score" />
										<Text x={50} y={45} text={String(score)} />
									</Group>

									<GridLayout {...dimentions(BLOCK_NEXT_SHAPE)} />
									<Group x={dimentions(BLOCK_NEXT_SHAPE).x} y={dimentions(BLOCK_NEXT_SHAPE).y}>
										<NextShapeContainer />
									</Group>

									<GridLayout {...dimentions(BLOCK_BOARD)} />
									<Group x={dimentions(BLOCK_BOARD).x} y={dimentions(BLOCK_BOARD).y}>
										<BoardContainer />
										<CurrentShapeContainer />
									</Group>
								</Layer>
							</Stage>
							<hr />
							<Control gameUpdate={gameUpdate} game={game} />
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
		speed: store.process.speed,
		score: store.process.score,
		lines: store.process.lines,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		gameUpdate: bindActionCreators(gameActions.actionGameUpdate, dispatch),
		// speedUpdate: bindActionCreators(processActions.actionProcessUpdateSpeed, dispatch),
		// scoreUpdate: bindActionCreators(processActions.actionProcessUpdateScore, dispatch),
		// linesUpdate: bindActionCreators(processActions.actionProcessUpdateLines, dispatch),
		// boardUpdate: bindActionCreators(boardActions.actionBoardUpdate, dispatch),
		// nextShapeUpdate: bindActionCreators(nextShapeActions.actionNextShapeUpdate, dispatch),
		// currentShapeUpdate: bindActionCreators(currentShapeActions.actionCurrentShapeUpdate, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameContainer)
