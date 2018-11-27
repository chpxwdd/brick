import {
	NEXT_SHAPE_UPDATE,
	NEXT_SHAPE_RESET,
} from '../constants/next-shape-constants'
const initialState = { dx: 0, dy: 0, matrix: []}

export default function nextShapeReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case NEXT_SHAPE_UPDATE:
			return {
				...state,
				...payload,
			}
		case NEXT_SHAPE_RESET:
			return {
				...state,
				...initialState,
			}

		default:
			return state
	}
}
