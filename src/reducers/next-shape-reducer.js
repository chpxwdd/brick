import { NEXT_SHAPE_UPDATE } from '../constants/next-shape-constants'
const initialState = { dx: 0, dy: 0, matrix: [], alias: '', angle: 0 }

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
		default:
			return state
	}
}
