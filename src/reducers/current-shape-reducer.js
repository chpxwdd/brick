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
	dx: Math.ceil((COLS - SHAPE_CELLS) / 2),
	dy: 0,
	matrix: [],
}

export default function currentShapeReducer(state = initialState, { type, payload }) {
	switch (type) {
		case CURRENT_SHAPE_UPDATE:
			return {
				...state,
				payload,
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
				dx: payload - 1,
			}

		case CURRENT_SHAPE_MOVE_RIGHT:
			return {
				...state,
				dx: payload + 1,
			}

		case CURRENT_SHAPE_MOVE_DOWN:
			return {
				...state,
				dy: payload + 1,
			}

		case CURRENT_SHAPE_ROTATE_LEFT:
			return {
				...state,
				matrix: ShapeUtils.rotateLeft(payload),
			}

		case CURRENT_SHAPE_ROTATE_RIGHT:
			return {
				...state,
				matrix: ShapeUtils.rotateRight(payload),
			}

		default:
			return state
	}
}
