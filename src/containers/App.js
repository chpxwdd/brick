import React, { Component } from 'react'
import Field from '../containers/Field'
import Figure from '../components/Figure'
import { FIELD_COLS, FIELD_ROWS, FIELD_FIGURE_CELLS } from '../constants/field-constants'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { status: false }
	}

	render() {
		return (
			<div className="Tetris">
				<Figure type="O" angle={0} debug={true} />

				<div className="container">
					<div className="row">
						<div className="col">
							{/* GAME FIELD CUP */}
							<div className="Field">
								<Field cols={FIELD_COLS} rows={FIELD_ROWS} active={this.state.status} />
							</div>
						</div>
						<div className="col">
							<div className="Process" />
							{/* NEXT FIGURE FORCAST */}
							<div className="Forecast">
								<Field cols={FIELD_FIGURE_CELLS} rows={FIELD_FIGURE_CELLS} active={false} />
							</div>
							<div className="Process" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App
