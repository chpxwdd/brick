import React, { Component } from 'react'
import { RUN, STOP, PAUSE } from '../../constants/control-constants'
import { MARGIN, CELL, ROWS } from '../../constants/dimention-constants'
// import { moveShape, rotateShape, shapeMatrix, shapeList, randomShape } from '../../utils/shape-utils'
import {
	getShape,
	transponse,
	shapeList,
	randomShape,
} from '../../utils/shape-utils'
import { Group, Text } from 'react-konva'
// import { boardCheckShapePosition, boardCombineShape, boardDropLine } from '../../utils/board-utils'

class Process extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { process } = this.props

		return (
			<Group x={20} y={0}>
				<Text x={0} y={0} text={process.score} />
				<Text x={0} y={10} text={process.score} />
			</Group>
			// 				<b>Score </b>
			// 				<Label>{process.score}</Label>
			// 			</li>
			// 			<li>
			// 				<b>Speed </b>
			// 				<Label>{process.speed}</Label>
			// 			</li>
			// 			<li>
			// 				<b>Lines </b>
			// 				<Label>{process.lines}</Label>
			// 			</li>
			// 		</ul>
			// 	</div>
			// 	<hr />
			// </div>
		)
	}
}

export default Process
