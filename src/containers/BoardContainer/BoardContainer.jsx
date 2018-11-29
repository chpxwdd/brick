import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionBoardUpdate } from '../../actions/board-actions'
import * as currentShapeActions from '../../actions/current-shape-actions'
import * as nextShapeActions from '../../actions/next-shape-actions'
import Board from '../../components/Board'

class BoardContainer extends Component {
	render() {
		return <Board {...this.props} />
	}
}

const mapStateToProps = store => {
	return {
		board: store.board,
		currentShape: store.currentShape,
		nextShape: store.nextShape,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateBoard: bindActionCreators(actionBoardUpdate, dispatch),
		updateCurrentShape: bindActionCreators(currentShapeActions.actionCurrentShapeUpdate, dispatch),
		updateNextShape: bindActionCreators(nextShapeActions.actionNextShapeUpdate, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BoardContainer)
