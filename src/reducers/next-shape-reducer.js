import { NEXT_SHAPE_UPDATE } from '../constants/next-shape-constants'

export default function nextShapeReducer(state = [], { type, payload }) {
	switch (type) {
		case NEXT_SHAPE_UPDATE:
			return {
				...state,
				nextShape: payload,
			}
		default:
			return state
	}
}
