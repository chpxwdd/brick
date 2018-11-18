import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import ProcessContainer from '../containers/ProcessContainer'
import DisplayContainer from './DisplayContainer/DisplayContainer'
import '../index.css'
import Control from '../components/Control'
import ControlContainer from './ControlContainer/ControlContainer'
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
