import {
	CURRENT_SHAPE_UPDATE,
	CURRENT_SHAPE_RESET,
} from '../constants/current-shape-constants'
import { SHAPE_CELLS, COLS } from '../constants/dimention-constants'
import {
	MOVE_LEFT,
	MOVE_RIGHT,
	MOVE_DOWN,
	ROTATE,
} from '../constants/control-constants'
import * as ShapeUtils from '../utils/shape-utils'

const initialState = {
	dx: (COLS - SHAPE_CELLS) / 2,
	dy: -1 * SHAPE_CELLS,
	alias: '',
	angle: 0,
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

		// TODO тут можно сделать проверки на координатфы
		case MOVE_LEFT:
			return {
				...state,
				payload: { dx: state.dx - 1 },
			}

		case MOVE_RIGHT:
			return {
				...state,
				payload: { dx: state.dx + 1 },
			}

		case MOVE_DOWN:
			return {
				...state,
				payload: { dx: state.dx + 1 },
			}

		case ROTATE:
			return {
				...state,
				payload: { matrix: ShapeUtils.rotateRight(state.matrix) },
				// payload: { matrix: ShapeUtils.rotateLeft(state.matrix)
			}

		default:
			return state
	}
}
