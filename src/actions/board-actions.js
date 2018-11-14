import { BOARD_UPDATE, BOARD_ADD_SHAPE, BOARD_CLEAR_LINE } from '../constants/board-constants'

export const actionBoardUpdate = board => {
	return {
		type: BOARD_UPDATE,
		payload: board,
	}
}

export const actionBoardAddShape = shape => {
	return {
		type: BOARD_ADD_SHAPE,
		payload: shape,
	}
}

export const actionBoardClearLine = dy => {
	return {
		type: BOARD_CLEAR_LINE,
		payload: dy,
	}
}
