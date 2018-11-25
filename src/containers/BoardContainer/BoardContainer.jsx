import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionBoardUpdate } from '../../actions/board-actions'
import Board from '../../components/Board'

class BoardContainer extends Component {
	render() {
		const { board, boardUpdate } = this.props

		return <Board board={board} boardUpdate={boardUpdate} />
	}
}

const mapStateToProps = store => {
	return {
		board: store.board,
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
