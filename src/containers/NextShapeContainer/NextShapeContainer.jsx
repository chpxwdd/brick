import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as currentShapeActions from '../../actions/current-shape-actions'
import * as nextShapeActions from '../../actions/next-shape-actions'
import NextShape from '../../components/NextShape'

class NextShapeContainer extends Component {
	render() {
		return <NextShape {...this.props} />
	}
}

const mapStateToProps = store => {
	return {
		nextShape: store.nextShape,
		currentShape: store.currentShape,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateCurrentShape: bindActionCreators(currentShapeActions.actionCurrentShapeUpdate, dispatch),
		updateNextShape: bindActionCreators(nextShapeActions.actionNextShapeUpdate, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NextShapeContainer)
