import { CURRENT_SHAPE_UPDATE } from '../constants/current-shape-constants'

const initialState = { dx: 0, dy: 0, alias: '', matrix: [] }

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
