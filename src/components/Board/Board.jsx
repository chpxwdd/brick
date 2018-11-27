import React, { Component } from 'react'
import { Group } from 'react-konva'
import Cell from '../Cell'
import { dimentions } from '../../utils/utils'
import { BLOCK_BOARD } from '../../constants/dimention-constants'

export default class Board extends Component {
	constructor(props) {
		super(props)
		this.state = { interval: null, speed: 0 }
	}

	// componentWillMount() {	}
	componentDidMount() {
		this.setState({
			interval: setInterval(() => {
				this.loop()
			}, 1100 - 100 * this.props.speed),
		})
	}
	componentWillUpdate() {
		console.log('Board componentWillUpdate')
	}

	componentDidUpdate() {
		console.log('Board componentDidUpdate')
	}

	componentWillUnmount() {
		console.log('Board componentWillUnmount')
		clearInterval(this.state.interval)
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return true
	// 	// если невозможно сделать ход
	// 	// console.log('<currentShape/>', 'shouldComponentUpdate')
	//
	// }

	loop = () => {
		this.props.moveDown(this.props.dy)
	}

	render() {
		return (
			<Group>
				{this.props.board.map((line, coordY) => {
					return line.map((status, coordX) => {
						return <Cell key={[coordX, coordY]} dx={coordX} dy={coordY} status={status} />
					})
				})}
			</Group>
		)
	}
}
