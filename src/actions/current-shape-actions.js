import {
	CURRENT_SHAPE_UPDATE,
	CURRENT_SHAPE_RESET,
	CURRENT_SHAPE_MOVE_RIGHT,
	CURRENT_SHAPE_MOVE_LEFT,
	CURRENT_SHAPE_MOVE_DOWN,
	CURRENT_SHAPE_ROTATE_RIGHT,
	CURRENT_SHAPE_ROTATE_LEFT,
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

export const actionCurrentShapeMoveRight = currentShape => {
	return {
		type: CURRENT_SHAPE_MOVE_RIGHT,
		payload: currentShape,
	}
}

export const actionCurrentShapeMoveLeft = currentShape => {
	return {
		type: CURRENT_SHAPE_MOVE_LEFT,
		payload: currentShape,
	}
}

export const actionCurrentShapeMoveDown = currentShape => {
	return {
		type: CURRENT_SHAPE_MOVE_DOWN,
		payload: currentShape,
	}
}
export const actionCurrentShapeRotateLeft = currentShape => {
	return {
		type: CURRENT_SHAPE_ROTATE_LEFT,
		payload: currentShape,
	}
}
export const actionCurrentShapeRotateRight = currentShape => {
	return {
		type: CURRENT_SHAPE_ROTATE_RIGHT,
		payload: currentShape,
	}
}
