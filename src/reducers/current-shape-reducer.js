import { CURRENT_SHAPE_UPDATE } from '../constants/current-shape-constants'

export default function nextShapeReducer(state = [], { type, payload }) {
	switch (type) {
		case CURRENT_SHAPE_UPDATE:
			return {
				...state,
				currentShape: payload,
			}
		default:
			return state
	}
}
