import { CURRENT_SHAPE_UPDATE } from '../constants/current-shape-constants'
import { SHAPE_CELLS, COLS } from '../constants/dimention-constants'

const initialState = {
	dx: (COLS - SHAPE_CELLS) / 2,
	dy: -SHAPE_CELLS,
	alias: '',
	matrix: [],
}

export default function currentShapeReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case CURRENT_SHAPE_UPDATE:
			return {
				...state,
				...payload,
			}
		default:
			return state
	}
}
