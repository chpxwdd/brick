import React, { Component } from 'react'
import { Stage, Layer } from 'react-konva'
import BoardContainer from '../containers/BoardContainer'
class App extends Component {
	render() {
		return (
			<div>
				<Stage width={200} height={400}>
					<Layer>
						{/* <Process /> */}
						<BoardContainer />
					</Layer>
				</Stage>
			</div>
		)
	}
}

export default App
