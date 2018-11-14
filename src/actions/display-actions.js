import {
	DISPLAY_UPDATE_BOARD,
	DISPLAY_UPDATE_NEXT_SHAPE,
	DISPLAY_UPDATE_CURRENT_SHAPE,
} from '../constants/display-constants'

export const actionDisplayUpdateBoard = board => {
	return {
		type: DISPLAY_UPDATE_BOARD,
		payload: {
			board: board,
		},
	}
}

export const actionDisplayUpdateNextShape = nextShape => {
	return {
		type: DISPLAY_UPDATE_NEXT_SHAPE,
		payload: {
			nextShape: nextShape,
		},
	}
}

export const actionDisplayUpdateCurrentShape = nextShape => {
	return {
		type: DISPLAY_UPDATE_CURRENT_SHAPE,
		payload: {
			nextShape: nextShape,
		},
	}
}
