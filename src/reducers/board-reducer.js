import { BOARD_UPDATE } from '../constants/board-constants'

export default function boardReducer(state = [], { type, payload }) {
	switch (type) {
		case BOARD_UPDATE:
			return {
				...state,
				board: payload,
			}

		default:
			return state
	}
}
