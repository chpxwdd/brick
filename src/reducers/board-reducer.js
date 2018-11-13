import { MOVE_LEFT, MOVE_RIGHT, ROTATE_LEFT, ROTATE_RIGHT } from '../constants/control-constants'
import { range } from '../utils/utils'

const initialState = range(0, 10).map((dx, i) => {
	return range(0, 20).map((dy, j) => {
		return { dx: dx, dy: dy, status: 0 }
	})
})

export default function boardReducer(state = initialState, { type, payload }) {
	switch (type) {
		case MOVE_LEFT:
			return {
				...state,
				payload: {
					board: payload.board,
				},
			}
		case MOVE_RIGHT:
			return {
				...state,
				payload: {
					board: payload.board,
				},
			}
		case ROTATE_LEFT:
			return {
				...state,
				payload: {
					board: payload.board,
				},
			}
		case ROTATE_RIGHT:
			return {
				...state,
				payload: {
					board: payload.board,
				},
			}

		default:
			return state
	}
}
