import React, { Component } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

class Control extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { process } = this.props

		return (
			<div>
				<ButtonGroup bsSize="sm">
					<Button>Run</Button>
					<Button>Stop</Button>
				</ButtonGroup>
			</div>
		)
	}
}

export default Board
