import React, { Component } from 'react'
import Shape from '../Shape'
import { SHAPE_CELLS, CELL } from '../../constants/dimention-constants'

import { Group } from 'react-konva'

export default class NextShape extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { dx, dy, matrix } = this.props.nextShape
		return (
			<Group x={0} y={0}>
				<Shape dx={dx} dy={dy} matrix={matrix} />
			</Group>
		)
	}
}
