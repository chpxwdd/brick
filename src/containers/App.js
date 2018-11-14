import React, { Component } from 'react'
import { Stage, Layer } from 'react-konva'
import { Grid, Row, Col } from 'react-bootstrap'
import BoardContainer from '../containers/BoardContainer'
import ProcessContainer from '../containers/ProcessContainer'
class App extends Component {
	render() {
		return (
			<div style={{ marginTop: '100px' }}>
				<Grid>
					<Row>
						<Col md={4} className="text-center ">
							<Stage width={200} height={400} className="pull-right">
								<Layer>
									<BoardContainer />
								</Layer>
							</Stage>
						</Col>
						<Col md={4}>
							<ProcessContainer />
						</Col>
					</Row>
					<Row />
				</Grid>
			</div>
		)
	}
}

export default App
