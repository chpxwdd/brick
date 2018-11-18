import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
	actionProcessUpdateSpeed,
	actionProcessUpdateStatus,
	actionProcessUpdateScore,
	actionProcessUpdateLines,
} from '../../actions/process-actions'
import { Group, Layer } from 'react-konva'
import { MARGIN, CELL, ROWS } from '../../constants/dimention-constants'
import Process from '../../components/Process'
import GridLayout from '../../components/GridLayout'
class ProcessContainer extends Component {
	dimentions = {
		x: 2 * MARGIN + CELL * ROWS,
		y: MARGIN,
		width: 160,
		height: 160,
		// rows: SHAPE_CELLS,
		// cols: SHAPE_CELLS,
	}

	render() {
		const {
			process,
			updateStatus,
			updateLines,
			updateSpeed,
			updateScore,
		} = this.props

		const { x, y } = this.dimentions
		return (
			<Layer>
				<GridLayout {...this.dimentions} />
				<Group x={x} y={y}>
					<Process
						process={process}
						updateLines={updateLines}
						updateSpeed={updateSpeed}
						updateScore={updateScore}
						updateStatus={updateStatus}
					/>
				</Group>
			</Layer>
		)
	}
}

const mapStateToProps = store => {
	return {
		process: store.process,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateLines: bindActionCreators(actionProcessUpdateLines, dispatch),
		updateSpeed: bindActionCreators(actionProcessUpdateSpeed, dispatch),
		updateStatus: bindActionCreators(actionProcessUpdateStatus, dispatch),
		updateScore: bindActionCreators(actionProcessUpdateScore, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProcessContainer)
