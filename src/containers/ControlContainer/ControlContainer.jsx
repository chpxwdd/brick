import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionGameUpdate } from '../../actions/game-actions'
import Control from '../../components/Control'

class ControlContainer extends Component {
	render() {
		const { game, updateGame } = this.props

		return (
			<div>
				<Control game={game} updateGame={updateGame} />
			</div>
		)
	}
}

const mapStateToProps = store => {
	return {
		game: store.game,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateGame: bindActionCreators(actionGameUpdate, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ControlContainer)
