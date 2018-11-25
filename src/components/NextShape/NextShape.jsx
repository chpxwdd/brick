import React, { Component } from 'react'
import Shape from '../Shape'
export default class NextShape extends Component {
	render() {
		return <Shape {...this.props} />
	}
}
