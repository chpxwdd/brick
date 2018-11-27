import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionNextShapeUpdate } from '../../actions/next-shape-actions'
import { actionCurrentShapeUpdate } from '../../actions/current-shape-actions'
import NextShape from '../../components/NextShape'

class NextShapeContainer extends Component {
	render() {
		const { /*updateNextShape,*/ currentShape, updateCurrentShape } = this.props
		return (
			<NextShape
				// updateNextShape={updateNextShape}
				updateCurrentShape={updateCurrentShape}
				currentShape={currentShape}
			/>
		)
	}
}

const mapStateToProps = store => {
	return {
		currentShape: store.currentShape,
		// dx: store.nextShape.dx,
		// dy: store.nextShape.dy,
		// matrix: store.nextShape.matrix,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		// updateNextShape: bindActionCreators(actionNextShapeUpdate, dispatch),
		updateCurrentShape: bindActionCreators(actionCurrentShapeUpdate, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NextShapeContainer)
