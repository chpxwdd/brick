import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionGameUpdate } from '../../actions/game-actions'
import { actionNextShapeUpdate } from '../../actions/next-shape-actions'
import { actionCurrentShapeUpdate } from '../../actions/current-shape-actions'
import { actionBoardUpdate } from '../../actions/board-actions'
import {
	actionProcessUpdate,
	actionProcessUpdateLines,
	actionProcessUpdateScore,
	actionProcessUpdateSpeed,
} from '../../actions/process-actions'
import { Stage, Layer } from 'react-konva'
import { Grid, Row, Col } from 'react-bootstrap'
import GridLayout from '../../components/GridLayout'
import Control from '../../components/Control'
import Process from '../../components/Process'
import NextShape from '../../components/NextShape'
import CurrentShape from '../../components/CurrentShape'
import BoardContainer from '../../containers/BoardContainer'
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
			currentShape,
			currentShapeUpdate,
			nextShape,
			nextShapeUpdate,
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
									{/* <GridLayout {...dimentions(BLOCK_DISPLAY)} /> */}
									<GridLayout {...dimentions(BLOCK_NEXT_SHAPE)} />
									<GridLayout {...dimentions(BLOCK_BOARD)} />
								</Layer>
								<Layer>
									<NextShape nextShape={nextShape} />
									<Process game={game} process={process} />
									<BoardContainer />
									<CurrentShape currentShape={currentShape} />
								</Layer>
							</Stage>
							<hr />
							<Control game={game} gameUpdate={gameUpdate} />
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
		nextShapeUpdate: bindActionCreators(actionNextShapeUpdate, dispatch),
		currentShapeUpdate: bindActionCreators(actionCurrentShapeUpdate, dispatch),
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
