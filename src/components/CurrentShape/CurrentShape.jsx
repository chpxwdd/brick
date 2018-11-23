import React, { Component } from 'react'
import Shape from '../Shape'
import { Group } from 'react-konva'

export default class CurrentShape extends Component {
	constructor(props) {
		super(props)
		this.state = {
			interval: null,
			currentShape: {
				dx: 0,
				dy: 0,
				matrix: [],
			},
		}
	}

	componentDidMount() {
		console.log('componentDidMount')
		this.setState({
			interval: setInterval(this.stepDown, 1000),
			currentShape: this.props.currentShape,
		})
	}

	// componentWillMount(){}
	componentDidUpdate() {
		console.log('componentDidUpdate')
	}
	// shouldComponentUpdate() {		return false	}

	componentWillUnmount() {
		clearInterval(this.state.interval)
	}

	stepDown = () => {
		this.props.moveDown(this.props.currentShape.dy)

		this.state.currentShape.dy++

		console.log(this.state.currentShape)
	}

	render() {
		const { dx, dy, matrix } = this.state.currentShape
		return (
			<Group>
				<Shape dx={dx} dy={dy} matrix={matrix} />
			</Group>
		)
	}
}
