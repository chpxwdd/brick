import React, { Component } from 'react'
import { connect } from 'react-redux'
import Board from '../../components/Board'

class BoardContainer extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { board } = this.props

		return <Board board={board} />
	}
}

const mapStateToProps = store => {
	console.log(store)
	return {
		board: store.board,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		// getPhotos: year => dispatch(getPhotos(year)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BoardContainer)
