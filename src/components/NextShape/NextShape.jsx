import React, { Component } from 'react'
import Shape from '../Shape'
import { Group } from 'react-konva'
import { dimentions } from '../../utils/utils'
import { BLOCK_NEXT_SHAPE } from '../../constants/dimention-constants'

export default class NextShape extends Component {
	render() {
		return (
			<Group x={dimentions(BLOCK_NEXT_SHAPE).x} y={dimentions(BLOCK_NEXT_SHAPE).y}>
				<Shape {...this.props} />
			</Group>
		)
	}
}
