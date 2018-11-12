import React, { Component } from 'react'
import { range } from '../../utils/utils.js'

class Figure extends Component {
	constructor(props) {
		super(props)
		this.state = {
			type: this.props.type,
			situation: [],
		}
	}

	// skeleton = [[2, 2],[1, 2],[0, 2],[-1, 2],[2, 1],[1, 1],[0, 1],[-1, 1],[2, 0],[1, 0],[0, 0],[-1, 0],[2, -1],[1, -1],[0, -1],[-1, -1]]

	/** MAIN  */
	situation() {
		return this.matrix(this.shape(this.shapes(this.state.type)))
	}

	matrix = shape => {
		return range(-2, 2).map((x, i) => {
			return range(-2, 2).map((y, j) => {
				// const pair =
				return shape.some(pairString => pairString === this.pairString([x, y]))
			})
		})
	}

	shape = pairs => {
		pairs.push([0, 0])

		return pairs.map(pair => {
			return this.pairString(pair)
		})
	}

	pairString = pair => {
		return String(pair[0])
			.concat(':')
			.concat(String(pair[1]))
	}

	shapes = shape => {
		switch (shape) {
			case 'I':
				return [[0, -1], [0, 1], [0, 2]]
			case 'O':
				return [[0, 1], [1, 0], [1, 1]]
			case 'T':
				return [[0, 1], [1, 0], [-1, 0]]
			case 'S':
				return [[0, 1], [1, 0], [-1, 1]]
			case 'Z':
				return [[0, 1], [1, 1], [-1, 0]]
			case 'L':
				return [[1, 0], [-1, 0], [-1, -1]]
			case 'J':
				return [[1, 0], [-1, 0], [1, 1]]
			default:
				return []
		}
	}
	render() {
		return (
			<div />
			// <Group x={0} y={0}>
			// 	<div />
			// </Group>
		)
	}
}

export default Figure
