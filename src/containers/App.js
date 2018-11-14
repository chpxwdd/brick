import React, { Component } from 'react'
import { Stage, Layer } from 'react-konva'
import BoardContainer from '../containers/BoardContainer'
import ProcessContainer from './ProcessContainer/ProcessContainer'
class App extends Component {
	render() {
		return (
			<div style={{ margin: '100px 0 0 200px' }}>
				<Stage width={200} height={400}>
					<Layer>
						<BoardContainer />
					</Layer>
				</Stage>
				<ProcessContainer />
			</div>
		)
	}
}

export default App
