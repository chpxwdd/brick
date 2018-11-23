import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Group } from 'react-konva'
import { actionBoardUpdate } from '../../actions/board-actions'
import { MARGIN } from '../../constants/dimention-constants'
import Board from '../../components/Board'
// import CurrentShape from '../../components/CurrentShape'

class BoardContainer extends Component {
	render() {
		const { board, boardUpdate } = this.props

		return (
			<Group>
				<Board board={board} boardUpdate={boardUpdate} />
			</Group>
		)
	}
}

const mapStateToProps = store => {
	return {
		board: store.board,
		currentShape: store.currentShape,
		game: store.game,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		boardUpdate: bindActionCreators(actionBoardUpdate, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BoardContainer)
