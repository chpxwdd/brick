import { BOARD_UPDATE, BOARD_RESET } from '../constants/board-constants'

export const actionBoardUpdate = board => {
	return {
		type: BOARD_UPDATE,
		payload: board,
	}
}

export const actionBoardReset = board => {
	return {
		type: 'BOARD_RESET',
		payload: board,
	}
}
