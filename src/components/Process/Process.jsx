import React, { Component } from 'react'
import { Group, Text } from 'react-konva'
import { dimentions } from '../../utils/utils'
import { BLOCK_PROCESS } from '../../constants/dimention-constants'
export default class Process extends Component {
	render() {
		const { game, process } = this.props
		return (
			<Group {...dimentions(BLOCK_PROCESS)}>
				<Group x={0} y={0}>
					<Text x={0} y={0} text="status" />
					<Text x={50} y={0} text={game} />
				</Group>
				<Group x={0} y={15}>
					<Text x={0} y={0} text="speed" />
					<Text x={50} y={0} text={String(process.speed)} />
				</Group>
				<Group x={0} y={30}>
					<Text x={0} y={0} text="lines" />
					<Text x={50} y={0} text={String(process.lines)} />
				</Group>
				<Group x={0} y={45}>
					<Text x={0} y={0} text="score" />
					<Text x={50} y={0} text={String(process.score)} />
				</Group>
			</Group>
		)
	}
}
