import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
	actionProcessUpdateSpeed,
	actionProcessUpdateStatus,
	actionProcessUpdateScore,
	actionProcessUpdateLines,
} from '../../actions/process-actions'
import { actionBoardUpdate } from '../../actions/board-actions'
import { actionNextShapeUpdate } from '../../actions/next-shape-actions'
import { actionCurrentShapeUpdate } from '../../actions/current-shape-actions'
import Process from '../../components/Process'
class ProcessContainer extends Component {
	render() {
		const {
			process,
			board,
			currentShape,
			nextShape,
			updateLines,
			updateSpeed,
			updateScore,
			updateStatus,
			nextShapeUpdate,
			currentShapeUpdate,
			boardUpdate,
		} = this.props

		return (
			<div>
				<Process
					process={process}
					board={board}
					currentShape={currentShape}
					nextShape={nextShape}
					updateSpeed={updateSpeed}
					updateScore={updateScore}
					updateStatus={updateStatus}
					updateLines={updateLines}
					nextShapeUpdate={nextShapeUpdate}
					currentShapeUpdate={currentShapeUpdate}
					boardUpdate={boardUpdate}
				/>
			</div>
		)
	}
}

const mapStateToProps = store => {
	return {
		board: store.board,
		currentShape: store.currentShape,
		process: store.process,
		nextShape: store.nextShape,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateLines: bindActionCreators(actionProcessUpdateLines, dispatch),
		updateSpeed: bindActionCreators(actionProcessUpdateSpeed, dispatch),
		updateStatus: bindActionCreators(actionProcessUpdateStatus, dispatch),
		updateScore: bindActionCreators(actionProcessUpdateScore, dispatch),
		nextShapeUpdate: bindActionCreators(actionNextShapeUpdate, dispatch),
		currentShapeUpdate: bindActionCreators(actionCurrentShapeUpdate, dispatch),
		boardUpdate: bindActionCreators(actionBoardUpdate, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProcessContainer)
