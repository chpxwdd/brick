import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import DisplayContainer from './DisplayContainer/DisplayContainer'
import ControlContainer from './ControlContainer/ControlContainer'
import '../index.css'
class App extends Component {
	render() {
		return (
			<div className="Game">
				<Grid>
					<Row>
						<DisplayContainer />
						<hr />
						<ControlContainer />
					</Row>
				</Grid>
			</div>
		)
	}
}

export default App
