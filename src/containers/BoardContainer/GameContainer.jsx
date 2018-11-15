import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Display from '../../components/Display'
import Process from '../../components/Process'
import Control from '../../components/Control'
import {
	actionDisplayUpdateBoard,
	actionDisplayUpdateNextShape,
	actionDisplayUpdateCurrentShape,
} from '../../actions/display-actions'
import {
	actionProcessChangeSpeed,
	actionProcessChangeStatus,
	actionProcessChangeScore,
} from '../../actions/process-actions'

class GameContainer extends Component {
	render() {
		const {
			display,
			process,
			actionProcessChangeSpeed,
			actionProcessChangeScore,
			actionProcessChangeStatus,
			actionDisplayUpdateBoard,
			actionDisplayUpdateNextShape,
			actionDisplayUpdateCurrentShape,
		} = this.props

		return (
			<div>
				<div className="Display">
					<Display
						display={display}
						actionDisplayUpdateBoard={actionDisplayUpdateBoard}
						actionDisplayUpdateNextShape={actionDisplayUpdateNextShape}
						// actionDisplayUpdateCurrentShape={actionDisplayUpdateCurrentShape}
					/>
					<hr />
					<Process
						process={process}
						actionProcessChangeSpeed={actionProcessChangeSpeed}
						actionProcessChangeScore={actionProcessChangeScore}
						actionProcessChangeStatus={actionProcessChangeStatus}
					/>
					<Control
						display={display}
						process={process}
						actionDisplayUpdateBoard={actionDisplayUpdateBoard}
						// actionDisplayUpdateNextShape={actionDisplayUpdateNextShape}
						// actionDisplayUpdateCurrentShape={actionDisplayUpdateCurrentShape}
						actionProcessChangeSpeed={actionProcessChangeSpeed}
						actionProcessChangeScore={actionProcessChangeScore}
						actionProcessChangeStatus={actionProcessChangeStatus}
					/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = store => {
	return {
		display: store.display,
		process: store.process,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		actionDisplayUpdateBoard: bindActionCreators(actionDisplayUpdateBoard, dispatch),
		actionDisplayUpdateCurrentShape: bindActionCreators(actionDisplayUpdateCurrentShape, dispatch),
		actionDisplayUpdateNextShape: bindActionCreators(actionDisplayUpdateNextShape, dispatch),
		actionProcessChangeSpeed: bindActionCreators(actionProcessChangeSpeed, dispatch),
		actionProcessChangeStatus: bindActionCreators(actionProcessChangeStatus, dispatch),
		actionProcessChangeScore: bindActionCreators(actionProcessChangeScore, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameContainer)
