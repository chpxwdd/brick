import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Display from '../../components/Display'
import Process from '../../components/Process'
import Control from '../../components/Control'
import { actionNextShapeUpdate } from '../../actions/next-shape-actions'
import NextShape from '../../components/NextShape'
import { Group } from 'react-konva'

class NextShapeContainer extends Component {
	render() {
		const { nextShape, actionNextShapeUpdate } = this.props

		return (
			<Group>
				<NextShape nextShape={nextShape} actionNextShapeUpdate={actionNextShapeUpdate} />
			</Group>
		)
	}
}

const mapStateToProps = store => {
	return {
		display: store.nextShape,
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
