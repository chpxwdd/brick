import React, { Component } from 'react'
import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap'
import { RUN, STOP, PAUSE } from '../../constants/control-constants'
import * as shapeUtils from '../../utils/shape-utils'

class Control extends Component {
	constructor(props) {
		super(props)
		this.state = { secondsElapsed: 0 }
		this.run = this.run.bind(this)
		this.pause = this.pause.bind(this)
		// this.continue = this.continue.bind(this)
		// this.stop = this.stop.bind(this)
	}

	pause = () => {
		this.props.updateStatus(PAUSE)
	}

	stop = () => {
		this.props.updateProcess({ status: RUN, speed: 0 })
	}

	run = () => {
		this.props.updateProcess({
			status: RUN,
			speed: 1,
		})

		const nextShape = shapeUtils.getShape()
		this.props.nextShapeUpdate(nextShape)
		this.props.currentShapeUpdate(nextShape)
	}

	componentDidUpdate() {}

	render() {
		const { process } = this.props
		return (
			<div>
				<ButtonGroup bsSize="sm">
					<Button
						onClick={this.run}
						disabled={process.status === PAUSE}
						bsStyle={process.status === RUN ? 'success' : 'default'}
					>
						<Glyphicon glyph="play" />
					</Button>
					<Button
						onClick={
							process.status === PAUSE
								? this.continue
								: this.pause
						}
						disabled={process.status === STOP}
						bsStyle={
							process.status === PAUSE ? 'primary' : 'default'
						}
					>
						<Glyphicon glyph="pause" />
					</Button>
					<Button
						onClick={this.stop}
						disabled={process.status === STOP}
						bsStyle="default"
					>
						<Glyphicon glyph="stop" />
					</Button>
				</ButtonGroup>
			</div>
		)
	}
}

export default Control
