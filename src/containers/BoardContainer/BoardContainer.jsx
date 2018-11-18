import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { Group, Layer } from 'react-konva'
import { COLS, ROWS, CELL } from '../../constants/dimention-constants'
import { MARGIN } from '../../constants/dimention-constants'
// import { actionBoardUpdate } from '../../actions/board-actions'
// import { actionCurrentShapeUpdate } from '../../actions/current-shape-actions'
import Board from '../../components/Board'
import GridLayout from '../../components/GridLayout'
import CurrentShape from '../../components/CurrentShape'

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
		const { board, currentShape } = this.props

		return (
			<Layer>
				<Group x={MARGIN} y={MARGIN}>
					<GridLayout {...this.state} />
					<Board board={board} />
					<CurrentShape
						dx={currentShape.dx}
						dy={currentShape.dy}
						matrix={currentShape.matrix}
					/>
				</Group>
			</Layer>
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
		// boardUpdate: bindActionCreators(actionBoardUpdate, dispatch),
		// shapeUpdate: bindActionCreators(actionCurrentShapeUpdate, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BoardContainer)
