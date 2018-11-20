import {
	CURRENT_SHAPE_UPDATE,
	CURRENT_SHAPE_RESET,
} from '../constants/current-shape-constants'
import { SHAPE_CELLS, COLS } from '../constants/dimention-constants'
import { ROTATE_0 } from '../constants/control-constants'

const initialState = {
	dx: (COLS - SHAPE_CELLS) / 2,
	dy: -1 * SHAPE_CELLS,
	alias: '',
	angle: ROTATE_0,
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

		case CURRENT_SHAPE_RESET:
			return {
				...state,
				...initialState,
			}

		default:
			return state
	}
}
