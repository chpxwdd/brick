import React, { Component } from 'react'
import Control from '../Control'

class Process extends Component {
	game() {}

	render() {
		// const { process } = this.props

		return (
			<div>
				<Control />
				<hr />
				<dl className="dl-horizontal">
					<dt>Scores</dt>
					<dd>{process.score}</dd>
					<dt>Speed</dt>
					<dd>{process.speed}</dd>
					<dt>Lines</dt>
					<dd>{process.lines}</dd>
				</dl>
			</div>
		)
	}
}

export default Process
