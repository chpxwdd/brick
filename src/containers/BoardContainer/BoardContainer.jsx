import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Group, Layer } from 'react-konva'
import { actionBoardUpdate } from '../../actions/board-actions'
import { actionCurrentShapeUpdate } from '../../actions/current-shape-actions'
import { actionNextShapeUpdate } from '../../actions/next-shape-actions'
import { COLS, ROWS, CELL } from '../../constants/dimention-constants'
import { MARGIN } from '../../constants/dimention-constants'
import Board from '../../components/Board'
import GridLayout from '../../components/GridLayout'
import Process from '../../components/Process'
import CurrentShape from '../../components/CurrentShape'
import { RUN } from '../../constants/control-constants'

class BoardContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			x: MARGIN,
			y: MARGIN,
			width: COLS * CELL,
			height: ROWS * CELL,
			cols: COLS,
			rows: ROWS,
		}
	}

	render() {
		const { board, currentShape, currentShapeUpdate, process } = this.props

		return (
			<Layer>
				<GridLayout {...this.state} />
				<Group x={MARGIN} y={MARGIN}>
					{process.status === RUN && (
						<CurrentShape
							currentShape={currentShape}
							currentShapeUpdate={currentShapeUpdate}
							process={process}
						/>
					)}
					<Board board={board} />
				</Group>
				<Group x={2 * MARGIN + COLS * CELL} y={MARGIN}>
					<Process process={process} />
				</Group>
			</Layer>
		)
	}
}

const mapStateToProps = store => {
	return {
		board: store.board,
		currentShape: store.currentShape,
		process: store.process,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		nextShapeUpdate: bindActionCreators(actionNextShapeUpdate, dispatch),
		boardUpdate: bindActionCreators(actionBoardUpdate, dispatch),
		currentShapeUpdate: bindActionCreators(
			actionCurrentShapeUpdate,
			dispatch
		),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BoardContainer)
