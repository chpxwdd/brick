import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionNextShapeUpdate } from '../../actions/next-shape-actions'
import { actionCurrentShapeUpdate } from '../../actions/current-shape-actions'
import NextShape from '../../components/NextShape'

class NextShapeContainer extends Component {
	render() {
		return <NextShape {...this.props} />
	}
}

const mapStateToProps = store => {
	return {
		dx: store.nextShape.dx,
		dy: store.nextShape.dy,
		matrix: store.nextShape.matrix,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		nextShapeUpdate: bindActionCreators(actionNextShapeUpdate, dispatch),
		currentShapeUpdate: bindActionCreators(actionCurrentShapeUpdate, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NextShapeContainer)
