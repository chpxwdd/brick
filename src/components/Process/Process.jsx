import React, { Component } from 'react'
import { Group, Text } from 'react-konva'

class Process extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { process } = this.props

		return (
			<Group x={20} y={0}>
				<Text x={0} y={0} text="score" />
				<Text x={0} y={10} text={process.score} />
			</Group>
		)
	}
}

export default Process
