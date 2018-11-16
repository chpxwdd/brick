import { BOARD_UPDATE } from '../constants/board-constants'

export const actionBoardUpdate = board => {
	return {
		type: BOARD_UPDATE,
		payload: {
			board: board,
		},
	}
}
