import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Group } from 'react-konva'
import { actionBoardUpdate } from '../../actions/board-actions'
import { MARGIN } from '../../constants/dimention-constants'
import Board from '../../components/Board'

class BoardContainer extends Component {
	render() {
		const { board, boardUpdate } = this.props

		return (
			<Group x={MARGIN} y={MARGIN}>
				<Board board={board} boardUpdate={boardUpdate} />
			</Group>
		)
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
