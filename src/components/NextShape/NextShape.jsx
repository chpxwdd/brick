import React, { Component } from 'react'
import Shape from '../Shape'

import { Group } from 'react-konva'

export default class NextShape extends Component {
	render() {
		const { nextShape } = this.props

		return (
			<Group>
				{/* <Shape dx={dx} dy={dy} matrix={matrix} /> */}
				<Shape {...nextShape} />
			</Group>
		)
	}
}
