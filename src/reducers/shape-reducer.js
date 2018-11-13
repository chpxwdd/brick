import { MOVE_LEFT, MOVE_RIGHT, ROTATE_LEFT, ROTATE_RIGHT } from '../constants/control-constants'

export default (state = { board: [], currentShape: [] }, action) => {
	switch (action.type) {
		case MOVE_LEFT:
			return {
				...state,
				board: action.payload.board,
				currentShape: action.payload.currentShape,
			}
		case MOVE_RIGHT:
			return {
				...state,
				board: action.payload.board,
			}
		case ROTATE_LEFT:
			return {
				...state,
				board: action.payload.board,
			}
		case ROTATE_RIGHT:
			return {
				...state,
				board: action.payload.board,
			}

		default:
			return state
	}
}
