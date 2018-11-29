import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Row, Col } from 'react-bootstrap'
import * as boardActions from '../../actions/board-actions'
import * as gameActions from '../../actions/game-actions'
import * as currentShapeActions from '../../actions/current-shape-actions'
import * as nextShapeActions from '../../actions/next-shape-actions'
import * as processActions from '../../actions/process-actions'
import Game from '../../components/Game'
import Control from '../../components/Control'

class GameContainer extends Component {
	render() {
		const { game, updateGame } = this.props
		return (
			<div>
				<Grid>
					<Row>
						<Col xs={12} style={{ margin: '50px' }}>
							<Game {...this.props} />
							<hr />
							<Control updateGame={updateGame} game={game} />
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
