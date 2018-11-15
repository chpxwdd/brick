import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
// import GameContainer from '../containers/GameContainer'
import DisplayContainer from '../containers/DisplayContainer'
import ProcessContainer from '../containers/ProcessContainer'
import '../index.css'
class App extends Component {
	render() {
		return (
			<div className="Game">
				<Grid>
					<Row>
						<DisplayContainer />
						{/* <Control/> */}
						<ProcessContainer />
					</Row>
				</Grid>
			</div>
		)
	}
}

export default App
