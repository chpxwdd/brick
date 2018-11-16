import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Group } from 'react-konva'
import Board from '../../components/Board'
import CurrentShape from '../../components/CurrentShape'
import { MARGIN } from '../../constants/dimention-constants'
import { actionBoardUpdate } from '../../actions/board-actions'
import { actionCurrentShapeUpdate } from '../../actions/current-shape-actions'

class BoardContainer extends Component {
	render() {
		const { board, currentShape, currentShapeUpdate, boardUpdate } = this.props

		return (
			<Group x={MARGIN} y={MARGIN}>
				<Board board={board} />
				<CurrentShape currentShape={currentShape} currentShapeUpdate={currentShapeUpdate} boardUpdate={boardUpdate} />
			</Group>
		)
	}
}

const mapStateToProps = store => {
	return {
		board: store.board,
		currentShape: store.currentShape,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		boardUpdate: bindActionCreators(actionBoardUpdate, dispatch),
		shapeUpdate: bindActionCreators(actionCurrentShapeUpdate, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BoardContainer)
