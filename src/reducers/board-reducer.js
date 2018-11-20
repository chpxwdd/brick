import { BOARD_UPDATE, BOARD_RESET } from '../constants/board-constants'
import { range } from '../utils/utils'
import { ROWS, COLS } from '../constants/dimention-constants'

const initialState = range(0, ROWS).map(() => {
	return range(0, COLS).map(() => {
		return 0
	})
})

export default function boardReducer(state = initialState, { type, payload }) {
	switch (type) {
		case BOARD_UPDATE:
			return {
				...state,
				payload,
			}

		case BOARD_RESET:
			return {
				...state,
				initialState,
			}

		default:
			return state
	}
}
