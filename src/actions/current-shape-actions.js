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

export const actionCurrentShapeMoveDown = dy => {
	return {
		type: CURRENT_SHAPE_MOVE_DOWN,
		payload: dy,
	}
}
export const actionCurrentShapeRotateLeft = matrix => {
	return {
		type: CURRENT_SHAPE_ROTATE_LEFT,
		payload: matrix,
	}
}
export const actionCurrentShapeRotateRight = matrix => {
	return {
		type: CURRENT_SHAPE_ROTATE_RIGHT,
		payload: matrix,
	}
}
