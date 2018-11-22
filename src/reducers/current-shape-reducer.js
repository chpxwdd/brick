import {
	CURRENT_SHAPE_UPDATE,
	CURRENT_SHAPE_RESET,
	CURRENT_SHAPE_ROTATE_RIGHT,
	CURRENT_SHAPE_ROTATE_LEFT,
	CURRENT_SHAPE_MOVE_DOWN,
	CURRENT_SHAPE_MOVE_LEFT,
	CURRENT_SHAPE_MOVE_RIGHT,
} from '../constants/current-shape-constants'
import { SHAPE_CELLS, COLS } from '../constants/dimention-constants'
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
		case CURRENT_SHAPE_MOVE_LEFT:
			return {
				...state,
				payload: { dx: state.dx - 1 },
			}

		case CURRENT_SHAPE_MOVE_RIGHT:
			return {
				...state,
				payload: { dx: state.dx + 1 },
			}

		case CURRENT_SHAPE_MOVE_DOWN:
			return {
				...state,
				payload: { dx: state.dy + 1 },
			}

		case CURRENT_SHAPE_ROTATE_LEFT:
			return {
				...state,
				payload: { matrix: ShapeUtils.rotateLeft(payload.matrix) },
				// payload: { matrix: ShapeUtils.rotateLeft(state.matrix)
			}

		case CURRENT_SHAPE_ROTATE_RIGHT:
			return {
				...state,
				payload: { matrix: ShapeUtils.rotateRight(payload.matrix) },
				// payload: { matrix: ShapeUtils.rotateLeft(state.matrix)
			}

		default:
			return state
	}
}
