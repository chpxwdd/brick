import React, { Component } from 'react'
import { range } from '../utils/utils'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			status: false,
		}
		this.handleStart = this.handleStart.bind()
	}

	handleStart(event) {}

	render() {
		return (
			<div style={{ margin: '100px 0 100px 100px' }}>
				<div style={{ border: '1px solid #444', width: 402, height: 802, marginRight: '10px', float: 'left' }}>
					{range(0, 20).map((dx, i) => {
						return (
							<div key={i}>
								{range(0, 10).map((dy, j) => {
									return (
										<div
											key={j}
											style={{
												border: '1px solid black',
												width: '40px',
												height: '40px',
												float: 'left',
												textAlign: 'center',
											}}
										>
											<small>
												{i};{j}
											</small>
											<br />
											<strong>0</strong>
										</div>
									)
								})}
								<div style={{ clear: 'both' }} />
							</div>
						)
					})}
				</div>
				<div style={{ float: 'left' }}>
					<button onClick={this.handleStart()}>Start</button>

					<div className="process">
						<div>run : 0</div>
						<div>level : 1</div>
						<div>speed : 1</div>
						<div>forecast shape: 'O'</div>
						<div>forecast shape: 'O'</div>
					</div>
				</div>
				<div style={{ clear: 'both' }} />
			</div>
		)
	}
}

export default App
