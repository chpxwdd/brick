import { NEXT_SHAPE_UPDATE, NEXT_SHAPE_RESET } from '../constants/next-shape-constants'

import * as ShapeUtils from '../utils/shape-utils'

const initialState = { dx: 0, dy: 0, matrix: [] }

export default function nextShapeReducer(state = initialState, { type, payload }) {
	switch (type) {
		case NEXT_SHAPE_UPDATE:
			return {
				...state,
				...payload,
			}
		case NEXT_SHAPE_RESET:
			let shape = ShapeUtils.getShape()
			return {
				...state,
				shape,
			}

		default:
			return state
	}
}
