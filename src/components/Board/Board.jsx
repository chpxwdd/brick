import React, { Component } from 'react'
import { Group } from 'react-konva'
import Cell from '../Cell'

export default class Board extends Component {
	componentDidMount() {
		console.log('<Board/> componentDidMount')
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.board === this.props.board) {
			console.log('<Board/> shouldComponentUpdate -> FALSE')
			return false
		}
		console.log('<Board/> shouldComponentUpdate -> TRUE')
		return true
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('<Board/> componentDidUpdate')
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
