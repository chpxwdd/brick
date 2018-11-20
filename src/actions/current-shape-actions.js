import {
	CURRENT_SHAPE_UPDATE,
	CURRENT_SHAPE_RESET,
} from '../constants/current-shape-constants'

export const actionCurrentShapeUpdate = currentShape => {
	return {
		type: CURRENT_SHAPE_UPDATE,
		payload: currentShape,
	}
}

export const actionCurrentShapeReset = currentShape => {
	return {
		type: CURRENT_SHAPE_RESET,
		payload: currentShape,
	}
}
