import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Group } from 'react-konva'
import Board from '../../components/Board'
import CurrentShape from '../../components/CurrentShape'
import { MARGIN } from '../../constants/dimention-constants'

class BoardContainer extends Component {
	render() {
		const { board, currentShape } = this.props

		return (
			<Group x={MARGIN} y={MARGIN}>
				<Board board={board} />
				{/* <CurrentShape currentShape={currentShape} /> */}
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
		// actionDisplayUpdateBoard: bindActionCreators(actionDisplayUpdateBoard, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BoardContainer)
