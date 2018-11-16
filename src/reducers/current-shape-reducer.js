import { CURRENT_SHAPE_UPDATE } from '../constants/current-shape-constants'

const initialState = { dx: 0, dy: 0, matrix: [] }

export default function nextShapeReducer(state = initialState, { type, payload }) {
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
