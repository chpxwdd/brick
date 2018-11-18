import React, { Component } from 'react'
import { Group, Text } from 'react-konva'

class Process extends Component {
	render() {
		const { process } = this.props

		return (
			<Group>
				<Group x={0} y={0}>
					<Text x={0} y={0} text="status" />
					<Text x={50} y={0} text={process.status} />
				</Group>
				<Group x={0} y={15}>
					<Text x={0} y={0} text="speed" />
					<Text x={50} y={0} text={process.speed.toString()} />
				</Group>
				<Group x={0} y={30}>
					<Text x={0} y={0} text="lines" />
					<Text x={50} y={0} text={process.lines.toString()} />
				</Group>
				<Group x={0} y={45}>
					<Text x={0} y={0} text="score" />
					<Text x={50} y={0} text={process.score.toString()} />
				</Group>
			</Group>
		)
	}
}

export default Process
