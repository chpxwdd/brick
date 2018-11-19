import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { Group } from 'react-konva'
import { dimentions } from '../../utils/utils'
import { BLOCK_PROCESS } from '../../constants/dimention-constants'
import Process from '../../components/Process'

class ProcessContainer extends Component {
	render() {
		const { game, process } = this.props

		return (
			<Group {...dimentions(BLOCK_PROCESS)}>
				<Process game={game} process={process} />
			</Group>
		)
	}
}

const mapStateToProps = store => {
	return {
		process: store.process,
		game: store.game,
	}
}

// const mapDispatchToProps = dispatch => {}

export default connect(
	mapStateToProps
	// mapDispatchToProps
)(ProcessContainer)
