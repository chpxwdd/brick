import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import ProcessContainer from '../containers/ProcessContainer'
import DisplayContainer from './DisplayContainer/DisplayContainer'
import '../index.css'
class App extends Component {
	render() {
		return (
			<div className="Game">
				<Grid>
					<Row>
						<div className="Display">
							<DisplayContainer />
							<hr />
							<ProcessContainer />
						</div>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default App
