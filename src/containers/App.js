import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import { Stage, Layer } from 'react-konva'
// import DisplayContainer from '../containers/DisplayContainer'
import ProcessContainer from '../containers/ProcessContainer'
import BoardContainer from '../containers/BoardContainer'
import NextShapeContainer from '../containers/NextShapeContainer'
import '../index.css'
import DisplayContainer from './DisplayContainer/DisplayContainer'
class App extends Component {
	render() {
		return (
			<div className="Game">
				<Grid>
					<Row>
						<DisplayContainer />
						<hr />
						<ProcessContainer />
					</Row>
				</Grid>
			</div>
		)
	}
}

export default App
