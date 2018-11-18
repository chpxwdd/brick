import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
	actionProcessUpdateSpeed,
	actionProcessUpdateStatus,
	actionProcessUpdateScore,
	actionProcessUpdateLines,
	actionProcessUpdate,
} from '../../actions/process-actions'
import { actionNextShapeUpdate } from '../../actions/next-shape-actions'
import { actionCurrentShapeUpdate } from '../../actions/current-shape-actions'
import { actionBoardUpdate } from '../../actions/board-actions'
import Control from '../../components/Control'

class ControlContainer extends Component {
	render() {
		const {
			process,
			nextShape,
			currentShape,
			updateProcess,
			updateLines,
			updateSpeed,
			updateStatus,
			updateScore,
			boardUpdate,
			currentShapeUpdate,
			nextShapeUpdate,
		} = this.props

		return (
			<div>
				<Control
					process={process}
					nextShape={nextShape}
					currentShape={currentShape}
					updateProcess={updateProcess}
					updateLines={updateLines}
					updateSpeed={updateSpeed}
					updateStatus={updateStatus}
					updateScore={updateScore}
					currentShapeUpdate={currentShapeUpdate}
					nextShapeUpdate={nextShapeUpdate}
					boardUpdate={boardUpdate}
				/>
			</div>
		)
	}
}

const mapStateToProps = store => {
	return {
		process: store.process,
		board: store.board,
		nextShape: store.nextShape,
		currentShape: store.currentShape,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateLines: bindActionCreators(actionProcessUpdateLines, dispatch),
		updateSpeed: bindActionCreators(actionProcessUpdateSpeed, dispatch),
		updateStatus: bindActionCreators(actionProcessUpdateStatus, dispatch),
		updateScore: bindActionCreators(actionProcessUpdateScore, dispatch),
		updateProcess: bindActionCreators(actionProcessUpdate, dispatch),
		boardUpdate: bindActionCreators(actionBoardUpdate, dispatch),
		nextShapeUpdate: bindActionCreators(actionNextShapeUpdate, dispatch),
		currentShapeUpdate: bindActionCreators(
			actionCurrentShapeUpdate,
			dispatch
		),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ControlContainer)
