import { range } from '../utils/utils'
import {
	BOARD_MOVE_LEFT,
	BOARD_MOVE_RIGHT,
	BOARD_MOVE_DOWN,
	BOARD_CLEAR_LINE,
	BOARD_ROTATE_LEFT,
	BOARD_ROTATE_RIGHT,
	BOARD_ADD_SHAPE,
	BOARD_UPDATE,
} from '../constants/board-constants'

const initialState = range(0, 10).map((dx, i) => {
	return range(0, 20).map((dy, j) => {
		return { dx: dx, dy: dy, status: 0 }
	})
})

export default function boardReducer(state = initialState, { type, payload }) {
	switch (type) {
		case BOARD_UPDATE:
			return {
				...state,
				board: payload.board,
			}
		case BOARD_MOVE_LEFT:
			return {
				...state,
				board: payload.board,
			}
		case BOARD_MOVE_RIGHT:
			return {
				...state,
				board: payload.board,
			}
		case BOARD_ROTATE_LEFT:
			return {
				...state,
				board: payload.board,
			}
		case BOARD_ROTATE_RIGHT:
			return {
				...state,
				board: payload.board,
			}
		case BOARD_MOVE_DOWN:
			return {
				...state,
				board: payload.board,
			}

		case BOARD_CLEAR_LINE:
			return {
				...state,
				board: payload.board,
			}

		case BOARD_ADD_SHAPE:
			return {
				...state,
				board: payload.board,
			}

		default:
			return state
	}
}
