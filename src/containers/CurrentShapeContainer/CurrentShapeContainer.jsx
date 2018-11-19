import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Group } from 'react-konva'
import { MARGIN } from '../../constants/dimention-constants'
import { actionCurrentShapeUpdate } from '../../actions/current-shape-actions'
import CurrentShape from '../../components/CurrentShape'

class CurrentShapeContainer extends Component {
	render() {
		const { process, currentShape, currentShapeUpdate } = this.props

		return (
			<Group x={MARGIN} y={MARGIN}>
				<CurrentShape
					process={process}
					currentShape={currentShape}
					currentShapeUpdate={currentShapeUpdate}
				/>
			</Group>
		)
	}
}

const mapStateToProps = store => {
	return {
		process: store.process,
		nextShape: store.nextShape,
		currentShape: store.currentShape,
		board: store.board,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		currentShapeUpdate: bindActionCreators(
			actionCurrentShapeUpdate,
			dispatch
		),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CurrentShapeContainer)
