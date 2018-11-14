import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'react-bootstrap'
import Board from '../../components/Board'
import { actionBoardAddShape, actionBoardUpdate, actionBoardClearLine } from '../../actions/board-actions'

class BoardContainer extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { board, actionBoardUpdate, actionBoardAddShape, actionBoardClearLine } = this.props

		return (
			<Board
				board={board}
				actionBoardUpdate={actionBoardUpdate}
				actionBoardAddShape={actionBoardAddShape}
				actionBoardClearLine={actionBoardClearLine}
			/>
		)
	}
}

const mapStateToProps = store => {
	return {
		board: store.board,
	}
}

const mapDispatchToProps = dispatch => ({
	actionBoardUpdate: bindActionCreators(actionBoardUpdate, dispatch),
	actionBoardAddShape: bindActionCreators(actionBoardAddShape, dispatch),
	actionBoardClearLine: bindActionCreators(actionBoardClearLine, dispatch),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BoardContainer)
