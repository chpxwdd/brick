import React, { Component } from 'react'
import Shape from '../Shape'
import { Group } from 'react-konva'

export default class CurrentShape extends Component {
	render() {
		return (
			<Group>
				<Shape {...this.props} />
			</Group>
		)
	}
}
