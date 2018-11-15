import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Display from '../../components/Display'
import {
	actionDisplayUpdateBoard,
	actionDisplayUpdateNextShape,
	actionDisplayUpdateCurrentShape,
} from '../../actions/display-actions'

class DisplayContainer extends Component {
	render() {
		const {
			display,
			actionDisplayUpdateBoard,
			actionDisplayUpdateNextShape,
			actionDisplayUpdateCurrentShape,
		} = this.props

		return (
			<div>
				<Stage width={width} height={height}>
					<Layer>
						<Display
							display={display}
							// actionDisplayUpdateBoard={actionDisplayUpdateBoard}
							// actionDisplayUpdateNextShape={actionDisplayUpdateNextShape}
							// actionDisplayUpdateCurrentShape={actionDisplayUpdateCurrentShape}
						/>
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
		display: store.display,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		actionDisplayUpdateBoard: bindActionCreators(actionDisplayUpdateBoard, dispatch),
		actionDisplayUpdateCurrentShape: bindActionCreators(actionDisplayUpdateCurrentShape, dispatch),
		actionDisplayUpdateNextShape: bindActionCreators(actionDisplayUpdateNextShape, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DisplayContainer)
