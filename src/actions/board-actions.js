import {
	BOARD_UPDATE,
	// BOARD_DROP_LINE,
} from '../constants/board-constants'

export const actionBoardUpdate = board => {
	return {
		type: DISPLAY_UPDATE_BOARD,
		payload: {
			board: board,
		},
	}
}

// export const actionBoardDropLine = nextShape => {
// 	return {
// 		type: DISPLAY_UPDATE_NEXT_SHAPE,
// 		payload: {
// 			nextShape: nextShape,
// 		},
// 	}
// }

// export const actionDisplayUpdateCurrentShape = nextShape => {
// 	return {
// 		type: DISPLAY_UPDATE_CURRENT_SHAPE,
// 		payload: {
// 			nextShape: nextShape,
// 		},
// 	}
// }
