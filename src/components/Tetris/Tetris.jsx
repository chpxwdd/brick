import React, { Component } from 'react'

export default class Tetris extends Component {
	constructor(props) {
		super(props)
		this.state = { interval: null }
	}

	// componentWillMount() {	}
	componentDidMount() {
		this.setState({
			interval: setInterval(() => {
				this.loop()
			}, 1100 - 100 * this.props.process.speed),
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
		if (this.props.game === PAUSE) {
			return
		}
		this.props.moveDown(this.props.dy)
	}

	render() {
		return <div />
	}
}
