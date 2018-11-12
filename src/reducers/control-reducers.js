import {
	CONTROL_MOVE_LEFT,
	CONTROL_MOVE_RIGHT,
	CONTROL_ROTATE_CLOCKWISE,
	CONTROL_ROTATE_COUNTERCLOCKWISE,
} from '../constants/control-constants'

export default (state = { situation: [] }, action) => {
	switch (action.type) {
		case CONTROL_MOVE_LEFT:
			return {
				...state,
				situation: action.payload.situation,
			}
		case CONTROL_MOVE_RIGHT:
			return {
				...state,
				situation: action.payload.situation,
			}
		case CONTROL_ROTATE_CLOCKWISE:
			return {
				...state,
				situation: action.payload.situation,
			}
		case CONTROL_ROTATE_COUNTERCLOCKWISE:
			return {
				...state,
				situation: action.payload.situation,
			}

		default:
			return state
	}
}
