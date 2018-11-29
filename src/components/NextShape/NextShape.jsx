import React, { Component } from 'react'
import Shape from '../Shape'

import * as ShapeUtils from '../../utils/shape-utils'

export default class NextShape extends Component {
	constructor(props) {
		super(props)
		this.state = { matrix: [] }
	}

	//
	componentDidMount() {
		// const matrix = ShapeUtils.getShape().matrix
		// this.props.updateCurrentShape({ matrix: ShapeUtils.getShape().matrix })
		// this.setState((state, props) => {
		// 	return { matrix: ShapeUtils.getShape().matrix }
		// })
		this.props.updateCurrentShape({ matrix: ShapeUtils.getShape().matrix })
	}

	componentWillReceiveProps(nextProps) {
		console.log('NextShape componentWillReceiveProps(nextProps) ->', nextProps)
	}

	componentDidUpdate(prevProps, prevState) {
		this.props.updateCurrentShape({ matrix: this.state })
	}

	render() {
		// const { matrix } = this.state
		const { matrix } = this.props.nextShape
		return <Shape matrix={matrix} />
	}
}
