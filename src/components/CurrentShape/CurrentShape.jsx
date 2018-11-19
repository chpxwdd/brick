import React, { Component } from 'react'
import Shape from '../Shape'
import { Group } from 'react-konva'
import { MARGIN } from '../../constants/dimention-constants'

export default class CurrentShape extends Component {
	render() {
		const { dx, dy, matrix } = this.props.currentShape
		return (
			<Group x={MARGIN} y={MARGIN}>
				<Shape dx={dx} dy={dy} matrix={matrix} />
			</Group>
		)
	}
}
