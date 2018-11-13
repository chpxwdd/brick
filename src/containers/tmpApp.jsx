import Field from './Field'
import { Grid, Row } from 'react-bootstrap'
import {
	FIELD_COLS,
	FIELD_ROWS,
	FIELD_CELL,
	FIELD_FIGURE_CELLS,
	FIELD_BORDER,
	FIELD_MARGIN,
	FIELD_STROKE,
	FIELD_FILL,
} from '../constants/field-constants'
import { range } from '../utils/utils'
import Cell from '../components/Cell'
import { Stage, Layer, Group, Circle } from 'react-konva'

cupWidth = FIELD_CELL * FIELD_COLS + FIELD_BORDER * 4
cupHeihgt = FIELD_CELL * FIELD_ROWS + FIELD_BORDER * 4
forecastWidth = FIELD_FIGURE_CELLS * FIELD_CELL + 2 * FIELD_BORDER
clientWidth = this.cupWidth + this.forecastWidth + 3 * FIELD_MARGIN
clientHeight = this.cupHeihgt + 2 * FIELD_MARGIN
;<Grid>
	<Row>
		<Stage width={this.clientWidth} height={this.clientHeight + this.forecastWidth}>
			<Layer>
				{/* FIELD */}
				<Group x={FIELD_MARGIN} y={FIELD_MARGIN} width={this.cupWidth} height={this.cupHeight}>
					{range(0, FIELD_COLS).map((dx, i) => {
						return (
							<Group key={i}>
								{range(0, FIELD_ROWS).map((dy, j) => {
									return (
										<Group key={j}>
											<Cell dx={dx} dy={dy} state={0} />
										</Group>
									)
								})}
							</Group>
						)
					})}
				</Group>
				{/* FORECAST */}
				<Group x={this.cupWidth + 2 * FIELD_MARGIN} y={FIELD_MARGIN}>
					{range(0, FIELD_FIGURE_CELLS).map((dx, i) => {
						return (
							<Group key={i}>
								{range(0, FIELD_FIGURE_CELLS).map((dy, j) => {
									return (
										<Group key={j}>
											<Cell dx={dx} dy={dy} state={0} />
										</Group>
									)
								})}
							</Group>
						)
					})}
				</Group>
			</Layer>
			<Layer>
				<Circle
					x={this.cupWidth + this.forecastWidth / 2 + 2 * FIELD_MARGIN}
					y={2 * FIELD_MARGIN + this.forecastWidth + 2 * FIELD_MARGIN}
					radius={FIELD_CELL}
					fill={FIELD_FILL}
					strokeWidth={2}
					stroke={FIELD_STROKE}
					onClick={this.handleStart()}
				/>
			</Layer>
		</Stage>
	</Row>
</Grid>
