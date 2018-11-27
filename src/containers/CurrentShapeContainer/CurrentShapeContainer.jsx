import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/current-shape-actions'
import CurrentShape from '../../components/CurrentShape'
class CurrentShapeContainer extends Component {
	render() {
		const { dx, dy, matrix } = this.props
		return <CurrentShape dx={dx} dy={dy} matrix={matrix} />
	}
}

const mapStateToProps = store => {
	return {
		dx: store.currentShape.dx,
		dy: store.currentShape.dy,
		matrix: store.currentShape.matrix,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		moveRight: bindActionCreators(actions.actionCurrentShapeMoveRight, dispatch),
		moveLeft: bindActionCreators(actions.actionCurrentShapeMoveLeft, dispatch),
		rotateLeft: bindActionCreators(actions.actionCurrentShapeRotateLeft, dispatch),
		rotateRight: bindActionCreators(actions.actionCurrentShapeRotateRight, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CurrentShapeContainer)
