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
		const matrix = ShapeUtils.getShape().matrix
		this.props.updateCurrentShape({ matrix: ShapeUtils.getShape().matrix })

		this.setState((state, props) => {
			return { matrix: ShapeUtils.getShape().matrix }
		})
	}
	//
	componentWillReceiveProps() {
		console.log('NextShape componentWillReceiveProps')
	}
	//
	componentWillUpdate() {
		// console.log('NextShape componentWillUpdate')
	}
	//
	componentDidUpdate() {
		console.log('NextShape componentDidUpdate')
	}
	//
	componentWillUnmount() {
		console.log('NextShape componentWillUnmount')
	}
	//
	shouldComponentUpdate(prevState, prevProps) {
		console.log('NextShape shouldComponentUpdate prevState', prevState)
		console.log('NextShape shouldComponentUpdate prevProps', prevProps)
		return true
	}

	render() {
		const { matrix } = this.state
		return <Shape dx={0} dy={0} matrix={matrix} />
	}
}
