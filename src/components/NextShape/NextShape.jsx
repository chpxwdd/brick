import React, { Component } from 'react'
import Shape from '../Shape'
export default class NextShape extends Component {
	// при монтировании создаем фигуру для второго прохода итерации
	componentDidMount() {
		console.log('<NextShape/> componentDidMount')
		console.log('<NextShape/>', this.props)
		// this.props.updateNextShape({ matrix: ShapeUtils.getShape().matrix })
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// if (this.props.board === nextProps.board) {
	// 	console.log('<NextShape/> shouldComponentUpdate -> FALSE')
	// 	return false
	// }
	// console.log('<NextShape/> shouldComponentUpdate -> TRUE')
	// return true
	// }

	// componentDidUpdate(prevProps, prevState) {
	// console.log('<NextShape/> componentDidUpdate -> TRUE')
	// this.props.updateCurrentShape({ ...prevProps.nextShape })
	// }

	render() {
		return <Shape {...this.props.nextShape} />
	}
}
