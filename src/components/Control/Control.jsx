import React, { Component } from 'react'
import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap'
import { RUN, STOP, PAUSE } from '../../constants/game-constants'

export default class Control extends Component {
	constructor(props) {
		super(props)
		this.run = this.run.bind(this)
		this.pause = this.pause.bind(this)
		this.resume = this.resume.bind(this)
		this.stop = this.stop.bind(this)
	}

	run = () => {
		this.props.updateGame(String(RUN))
	}
	pause = () => {
		this.props.updateGame(String(PAUSE))
	}
	resume = () => {
		this.props.updateGame(String(RUN))
	}
	stop = () => {
		this.props.updateGame(String(STOP))
	}

	render() {
		const { game } = this.props
		return (
			<div>
				<ButtonGroup bsSize="sm">
					<Button
						onClick={this.run}
						disabled={game === RUN}
						bsStyle={game === RUN ? 'success' : 'default'}
					>
						<Glyphicon glyph="play" />
					</Button>
					<Button
						onClick={game === PAUSE ? this.resume : this.pause}
						disabled={game === STOP}
						bsStyle={game === PAUSE ? 'primary' : 'default'}
					>
						<Glyphicon glyph="pause" />
					</Button>
					<Button
						onClick={this.stop}
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
