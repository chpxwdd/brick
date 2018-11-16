import {
	ROTATE_0,
	ROTATE_90,
	ROTATE_180,
	ROTATE_270,
	// MOVE_DOWN,
	// MOVE_RIGHT,
	// MOVE_LEFT,
} from '../constants/control-constants'

export const shapeList = ['I', '0', 'T', 'S', 'Z', 'L', 'J']

export const randomShape = shapeList => {
	return shapeList[Math.floor(Math.random() * shapeList.length)]
}

export const shapeMatrix = shape => {
	switch (shape) {
		case 'O':
			return [[1, 1], [2, 1], [1, 2], [2, 2]]
		case 'I':
			return [[0, 2], [1, 2], [2, 2], [1, 3]]
		case 'S':
			return [[2, 1], [3, 1], [1, 2], [2, 2]]
		case 'Z':
			return [[1, 1], [2, 1], [2, 2], [3, 2]]
		case 'L':
			return [[3, 1], [1, 2], [2, 2], [3, 2]]
		case 'J':
			return [[1, 1], [1, 2], [2, 2], [3, 2]]
		case 'T':
			return [[2, 1], [1, 2], [2, 2], [3, 2]]
		default:
			return []
	}
}

export const rotateShape = (shape, angle) => {
	switch (angle) {
		case ROTATE_0:
		case ROTATE_90:
		case ROTATE_180:
		case ROTATE_270:
	}
	return shape
}
export const moveShape = (shape, moveDirection) => {
	return shape
}
