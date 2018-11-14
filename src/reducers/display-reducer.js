import { matrix } from '../utils/utils'
import {
	DISPLAY_UPDATE_BOARD,
	DISPLAY_UPDATE_NEXT_SHAPE,
	DISPLAY_UPDATE_CURRENT_SHAPE,
	DISPLAY_COLS,
	DISPLAY_SHAPE_CELLS,
	DISPLAY_ROWS,
} from '../constants/display-constants'

const initialState = {
	currentShape: [],
	nextShape: matrix(DISPLAY_COLS, DISPLAY_ROWS),
	board: matrix(DISPLAY_SHAPE_CELLS),
}

export default function displayReducer(state = initialState, { type, payload }) {
	switch (type) {
		case DISPLAY_UPDATE_BOARD:
			return {
				...state,
				board: payload.board,
			}

		case DISPLAY_UPDATE_NEXT_SHAPE:
			return {
				...state,
				nextShape: payload.nextShape,
			}

		case DISPLAY_UPDATE_CURRENT_SHAPE:
			return {
				...state,
				currentShape: payload.currentShape,
			}

		default:
			return state
	}
}
