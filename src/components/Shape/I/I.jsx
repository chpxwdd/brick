import React, { Component } from 'react'
import Piece from '../../Piece'

export default class I extends Component {
	constructor(props) {
		super(props)
		this.state = {
			matrix: [],
			angle: 0,
		}
	}

	config = {
		size: 4,
		matrix: [[1, 1], [1, 2], [1, 3], [1, 4]],
	}

	render() {
		return <Piece x={0} y={0} config={this.config} />
	}
}
