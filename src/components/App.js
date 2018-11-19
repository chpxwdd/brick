import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Display from './Display'
import ControlContainer from '../containers/ControlContainer'
import { MARGIN } from '../constants/dimention-constants'
import '../index.css'
class App extends Component {
	render() {
		return (
			<div className="Game">
				<Grid>
					<Row>
						<Col xs={12} style={{ margin: MARGIN }}>
							<Display />
							<ControlContainer />
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default App
