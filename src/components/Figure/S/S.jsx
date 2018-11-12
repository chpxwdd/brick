import React, { Component } from 'react'
import { Group } from 'react-konva'
import Figure from '../Figure'
import Cell from '../../Cell'
import { FIGURE_CELLS } from '../../../constants.js'
import { range } from '../../../utils'

class S extends Component {
	render() {
		const { dx, dy, active } = this.props
		return (
			<Group x={dx} y={dy}>
				{/* <Cell x={dx} y={dy} adress={[row, col, variant]} active={active}/>*/}
			</Group>
		)
	}
}

export default S
