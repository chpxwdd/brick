import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as gameActions from '../../actions/game-actions'
import { Grid, Row, Col } from 'react-bootstrap'
import Control from '../../components/Control'
// import * as processActions from '../../actions/process-actions'
// import * as boardActions from '../../actions/board-actions'
// import * as currentShapeActions from '../../actions/current-shape-actions'
// import * as nextShapeActions from '../../actions/next-shape-actions'
import { MARGIN } from '../../constants/dimention-constants'
import Game from '../../components/Game'
class GameContainer extends Component {
	render() {
		const { game, gameUpdate } = this.props
		return (
			<div>
				<Grid>
					<Row>
						<Col xs={12} style={{ margin: MARGIN }}>
							<Game game={game} />
							<hr />
							<Control gameUpdate={gameUpdate} game={game} />
						</Col>
					</Row>
				</Grid>
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
		gameUpdate: bindActionCreators(gameActions.actionGameUpdate, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameContainer)
