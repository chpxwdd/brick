import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import DisplayContainer from './DisplayContainer/DisplayContainer'
import ControlContainer from './ControlContainer/ControlContainer'
import { MARGIN } from '../constants/dimention-constants'
import '../index.css'
class App extends Component {
	render() {
		return (
			<div className="Game">
				<Grid>
					<Row>
						<Col xs={12} style={{ margin: MARGIN }}>
							<DisplayContainer />
							<ControlContainer />
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default App
