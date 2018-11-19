import React, { Component } from 'react'
import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap'
import { RUN, STOP, PAUSE } from '../../constants/game-constants'

export default class Control extends Component {
	render() {
		const { game, updateGame } = this.props
		return (
			<div>
				<ButtonGroup bsSize="sm">
					<Button
						onClick={() => {
							updateGame('RUN')
						}}
						disabled={game === RUN}
						bsStyle={game === RUN ? 'success' : 'default'}
					>
						<Glyphicon glyph="play" />
					</Button>
					<Button
						onClick={() => {
							game === PAUSE
								? updateGame('RUN')
								: updateGame('PAUSE')
						}}
						disabled={game === STOP}
						bsStyle={game === PAUSE ? 'primary' : 'default'}
					>
						<Glyphicon glyph="pause" />
					</Button>
					<Button
						onClick={() => {
							updateGame('STOP')
						}}
						disabled={game === STOP}
						bsStyle="default"
					>
						<Glyphicon glyph="stop" />
					</Button>
				</ButtonGroup>
			</div>
		)
	}
}
