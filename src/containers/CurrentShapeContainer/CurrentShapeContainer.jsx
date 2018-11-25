import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/current-shape-actions'
import { actionGameUpdate } from '../../actions/game-actions'
import { actionBoardUpdate } from '../../actions/board-actions'
import CurrentShape from '../../components/CurrentShape'
class CurrentShapeContainer extends Component {
	render() {
		return <CurrentShape {...this.props} />
	}
}

const mapStateToProps = store => {
	return {
		game: store.game,
		board: store.board,
		speed: store.process.speed,
		dx: store.currentShape.dx,
		dy: store.currentShape.dy,
		matrix: store.currentShape.matrix,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		boardUpdate: bindActionCreators(actionBoardUpdate, dispatch),
		gameUpdate: bindActionCreators(actionGameUpdate, dispatch),
		moveRight: bindActionCreators(actions.actionCurrentShapeMoveRight, dispatch),
		moveLeft: bindActionCreators(actions.actionCurrentShapeMoveLeft, dispatch),
		moveDown: bindActionCreators(actions.actionCurrentShapeMoveDown, dispatch),
		rotateLeft: bindActionCreators(actions.actionCurrentShapeRotateLeft, dispatch),
		rotateRight: bindActionCreators(actions.actionCurrentShapeRotateRight, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CurrentShapeContainer)
