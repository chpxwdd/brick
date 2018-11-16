import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionNextShapeUpdate } from '../../actions/next-shape-actions'
import GridLayout from '../../components/GridLayout'
import NextShape from '../../components/NextShape'
import { Group } from 'react-konva'
import { COLS, ROWS, CELL, SHAPE_CELLS, MARGIN } from '../../constants/dimention-constants'

class NextShapeContainer extends Component {
	dimentions = {
		x: 0,
		y: 0,
		width: CELL * SHAPE_CELLS,
		height: CELL * SHAPE_CELLS,
		rows: SHAPE_CELLS,
		cols: SHAPE_CELLS,
	}
	render() {
		const { nextShape, actionNextShapeUpdate } = this.props

		return (
			<Group x={COLS * CELL + 2 * MARGIN} y={MARGIN + (ROWS * CELL) / 2 - (SHAPE_CELLS * CELL) / 2}>
				<GridLayout {...this.dimentions} />
				<NextShape nextShape={nextShape} actionNextShapeUpdate={actionNextShapeUpdate} />
			</Group>
		)
	}
}

const mapStateToProps = store => {
	return {
		nextShape: store.nextShape,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		actionNextShapeUpdate: bindActionCreators(actionNextShapeUpdate, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NextShapeContainer)
