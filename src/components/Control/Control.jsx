import React, { Component } from 'react'
import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap'
import { RUN, STOP, PAUSE } from '../../constants/game-constants'

export default class Control extends Component {
	render() {
		const { game } = this.props
		return (
			<div>
				<ButtonGroup bsSize="lg">
					<Button
						onClick={() => this.props.updateGame(RUN)}
						disabled={game === RUN || game === PAUSE}
						bsStyle={game === RUN ? 'success' : 'default'}
					>
						<Glyphicon glyph="play" />
					</Button>
					<Button
						onClick={() => {
							game === PAUSE ? this.props.updateGame(RUN) : this.props.updateGame(PAUSE)
						}}
						disabled={game === STOP}
						bsStyle={game === PAUSE ? 'primary' : 'default'}
					>
						<Glyphicon glyph="pause" />
					</Button>
					<Button
						onClick={() => this.props.updateGame(STOP)}
						disabled={game === STOP}
						bsStyle={game === RUN || game === PAUSE ? 'danger' : 'default'}
					>
						<Glyphicon glyph="stop" />
					</Button>
				</ButtonGroup>
			</div>
		)
	}
}
