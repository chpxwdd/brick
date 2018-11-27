import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionBoardUpdate } from '../../actions/board-actions'
import * as currentShapeActions from '../../actions/current-shape-actions'
import Board from '../../components/Board'

class BoardContainer extends Component {
	render() {
		const {
			dx,
			dy,
			matrix,
			board,
			speed,
			boardUpdate,
			moveDown /*, moveRight, moveLeft,  rotateLeft, rotateRight*/,
		} = this.props

		return (
			<Board dx={dx} dy={dy} matrix={matrix} board={board} speed={speed} moveDown={moveDown} boardUpdate={boardUpdate} />
		)
	}
}

const mapStateToProps = store => {
	return {
		game: store.game,
		board: store.board,
		speed: store.process.speed,
		matrix: store.currentShape.matrix,
		dx: store.currentShape.dx,
		dy: store.currentShape.dy,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateBoard: bindActionCreators(actionBoardUpdate, dispatch),
		moveDown: bindActionCreators(currentShapeActions.actionCurrentShapeMoveDown, dispatch),
		// moveRight: bindActionCreators(currentShapeActions.actionCurrentShapeMoveRight, dispatch),
		// moveLeft: bindActionCreators(currentShapeActions.actionCurrentShapeMoveLeft, dispatch),
		// rotateLeft: bindActionCreators(currentShapeActions.actionCurrentShapeRotateLeft, dispatch),
		// rotateRight: bindActionCreators(currentShapeActions.actionCurrentShapeRotateRight, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BoardContainer)
