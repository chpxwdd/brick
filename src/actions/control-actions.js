import {
	CONTROL_MOVE_LEFT,
	CONTROL_MOVE_RIGHT,
	CONTROL_ROTATE_CLOCKWISE,
	CONTROL_ROTATE_COUNTERCLOCKWISE,
} from '../constants/control-constants'

export const actionControlMoveLeft = situation => {
	return {
		type: CONTROL_MOVE_LEFT,
		payload: situation,
	}
}

export const actionControlMoveRight = situation => {
	return {
		type: CONTROL_MOVE_RIGHT,
		payload: situation,
	}
}

export const actionControlRotateClockwise = situation => {
	return {
		type: CONTROL_ROTATE_CLOCKWISE,
		payload: situation,
	}
}

export const actionControlRotateCounterclockwise = situation => {
	return {
		type: CONTROL_ROTATE_COUNTERCLOCKWISE,
		payload: situation,
	}
}
