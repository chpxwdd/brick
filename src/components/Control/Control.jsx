import React, { Component } from 'react'
import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap'
// import { moveShape, rotateShape, shapeMatrix, shapeList } from '../../utils/shape-utils'
import * as matrixUtils from '../../utils/shape-utils'

import { RUN, STOP, PAUSE } from '../../constants/control-constants'
import { SHAPE_CELLS } from '../../constants/dimention-constants'

class Control extends Component {
	constructor(props) {
		super(props)

		// this.run = this.run.bind(this)
		// this.pause = this.pause.bind(this)
		// this.continue = this.continue.bind(this)
		// this.stop = this.stop.bind(this)
	}

	componentDidUpdate() {
		if (this.props.process.status === RUN) {
			// next Shape
			const shape = matrixUtils.getShape()

			this.props.nextShapeUpdate(shape)

			this.props.currentShapeUpdate({
				dx: 2,
				dy: -1 * SHAPE_CELLS,
				matrix: shape.matrix,
			})
		}
	}

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
