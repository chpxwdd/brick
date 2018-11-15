import React, { Component } from 'react'
import Control from '../Control'
import { Label } from 'react-bootstrap'
import { PROCESS_RUN } from '../../constants/process-constants'

class Process extends Component {
	componentDidMount() {
		if (this.props.process.status === PROCESS_RUN) {
			this.game()
		}
	}

	game() {
		const { process, display } = this.props
		const { board } = this.props.display

		let interval = process.speed * 500

		setInterval({}, interval)
	}

	render() {
		const { process } = this.props

		return (
			<div>
				<div className="Display">
					<ul className="list-inline ">
						<li>
							<b>Score </b>
							<Label>{process.score}</Label>
						</li>
						<li>
							<b>Speed </b>
							<Label>{process.speed}</Label>
						</li>
						<li>
							<b>Lines </b>
							<Label>{process.lines}</Label>
						</li>
					</ul>
				</div>
				<hr />
				<div className="Display">
					<Control process={process} />
				</div>
			</div>
		)
	}
}

export default Process
