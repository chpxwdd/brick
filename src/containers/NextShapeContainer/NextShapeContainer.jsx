import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Group, Layer } from 'react-konva'
import { actionNextShapeUpdate } from '../../actions/next-shape-actions'
import {
	COLS,
	ROWS,
	CELL,
	SHAPE_CELLS,
	MARGIN,
} from '../../constants/dimention-constants'
import GridLayout from '../../components/GridLayout'
import NextShape from '../../components/NextShape'

class NextShapeContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			x: COLS * CELL + 2 * MARGIN,
			y: MARGIN + (ROWS * CELL) / 2 - (SHAPE_CELLS * CELL) / 2,
			width: CELL * SHAPE_CELLS,
			height: CELL * SHAPE_CELLS,
			rows: SHAPE_CELLS,
			cols: SHAPE_CELLS,
		}
	}

	render() {
		const { x, y } = this.state
		const { process, nextShape, nextShapeUpdate } = this.props

		return (
			<Layer>
				<GridLayout {...this.state} />
				<Group x={x} y={y}>
					<NextShape
						process={process}
						nextShape={nextShape}
						nextShapeUpdate={nextShapeUpdate}
					/>
				</Group>
			</Layer>
		)
	}
}

const mapStateToProps = store => {
	return {
		process: store.process,
		nextShape: store.nextShape,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		nextShapeUpdate: bindActionCreators(actionNextShapeUpdate, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NextShapeContainer)
