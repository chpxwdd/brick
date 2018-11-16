import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Stage, Layer, Group } from 'react-konva'
// import {
// 	actionDisplayUpdateBoard,
// 	actionDisplayUpdateNextShape,
// 	actionDisplayUpdateCurrentShape,
// } from '../../actions/display-actions'
import {
	DISPLAY_COLS,
	DISPLAY_ROWS,
	DISPLAY_CELL,
	DISPLAY_SHAPE_CELLS,
	DISPLAY_MARGIN,
} from '../../constants/display-constants'
import { COLS, ROWS, CELL, MARGIN, SHAPE_CELLS } from '../../constants/dimention-constants'

import BoardContainer from '../../containers/BoardContainer'
import NextShapeContainer from '../../containers/NextShapeContainer'
import GridLayout from '../../components/GridLayout'

class DisplayContainer extends Component {
	dimentions = {
		width: COLS * CELL + SHAPE_CELLS * CELL + 3 * MARGIN,
		height: ROWS * CELL + 2 * MARGIN,
	}

	render() {
		const { width, height } = this.dimentions
		return (
			<div>
				<Stage width={width} height={height}>
					<Layer>
						<GridLayout x={0} y={0} width={width} height={height} />
						<BoardContainer />
						<NextShapeContainer />
					</Layer>
				</Stage>
			</div>
		)
	}
}

const mapStateToProps = store => {
	return {
		// process: store.process,
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
)(DisplayContainer)
