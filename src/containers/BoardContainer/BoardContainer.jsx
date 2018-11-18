import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Group } from 'react-konva'
import Board from '../../components/Board'
import { COLS, ROWS, CELL, COLOR } from '../../constants/dimention-constants'
import GridLayout from '../../components/GridLayout'
import { MARGIN } from '../../constants/dimention-constants'
import { actionBoardUpdate } from '../../actions/board-actions'
import { actionCurrentShapeUpdate } from '../../actions/current-shape-actions'

class BoardContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			x: 0,
			y: 0,
			width: COLS * CELL,
			height: ROWS * CELL,
			cols: COLS,
			rows: ROWS,
		}
	}
	render() {
		const {
			board,
			currentShape,
			currentShapeUpdate,
			boardUpdate,
		} = this.props

		return (
			<Group x={MARGIN} y={MARGIN}>
				<GridLayout {...this.state} />
				<Board
					board={board}
					currentShape={currentShape}
					currentShapeUpdate={currentShapeUpdate}
					boardUpdate={boardUpdate}
				/>
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
