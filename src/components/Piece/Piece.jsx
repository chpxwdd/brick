import React, { Component } from 'react'
import { Group } from 'react-konva'
import Cell from '../Cell'
import { CELL } from '../../constants/dimention-constants'
import { range } from '../../utils/utils'

export default class Piece extends Component {
	constructor(props) {
		super(props)
		this.state = {
			matrix: [],
		}
	}

	componentDidMount() {
		let config = this.props.config.matrix
		const matrix = range(0, this.props.config.size).map((row, dy) => {
			return range(0, this.props.config.size).map((col, dx) => {
				return String(dx)
					.concat(':')
					.concat(dy)
			})
		})
		console.log(matrix)
		this.setState({
			matrix: matrix,
		})
	}

	render() {
		const { dx, dy, config } = this.props

		return (
			<Group x={dx * CELL} y={dy * CELL}>
				{config.matrix.map((line, coordY) => {
					return line.map((status, coordX) => {
						return <Cell key={[coordX, coordY]} dx={coordX} dy={coordY} status={status} />
					})
				})}
			</Group>
		)
	}
}
