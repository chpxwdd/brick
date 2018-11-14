import React, { Component } from 'react'
import { Button, ButtonGroup, Label } from 'react-bootstrap'
import { PROCESS_RUN } from '../../constants/process-constants'
import Shape from '../Shape'

class Process extends Component {
	constructor(props) {
		super(props)
		this.handleProcessRun = this.handleProcessRun.bind(this)
	}

	handleProcessRun() {
		// generate next shape

		// Activate board

		// run game
		this.props.actionProcessChangeStatus(PROCESS_RUN)
	}

	game() {}

	render() {
		const { process } = this.props

		return (
			<div>
				<dl className="dl-horizontal">
					<dt>Scores</dt>
					<dd>
						<Label bsStyle="primary">{process.score}</Label>
					</dd>
					<dt>Speed</dt>
					<dd>
						<Label>{process.speed}</Label>
					</dd>
					<dt>Lines</dt>
					<dd>
						<Label>{process.lines}</Label>
					</dd>
				</dl>
				<hr />
				<Shape />
				<hr />
				<ButtonGroup bsSize="sm">
					<Button
						bsStyle="primary"
						onClick={() => {
							this.handleProcessRun()
						}}
					>
						Run
					</Button>
					<Button>Stop</Button>
				</ButtonGroup>
			</div>
		)
	}
}

export default Process
