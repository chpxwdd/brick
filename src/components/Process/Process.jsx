import React, { Component } from 'react'
import { Group, Text } from 'react-konva'
export default class Process extends Component {
	render() {
		const { x, y, speed, score, lines } = this.props
		return (
			<Group x={x} y={y}>
				{/* <Text x={0} y={0} text="status" />
				<Text x={50} y={0} text={game} /> */}
				<Text x={0} y={15} text="speed" />
				<Text x={50} y={15} text={String(speed)} />
				<Text x={0} y={30} text="lines" />
				<Text x={50} y={30} text={String(lines)} />
				<Text x={0} y={45} text="score" />
				<Text x={50} y={45} text={String(score)} />
			</Group>
		)
	}
}
