import {
	PROCESS_UPDATE,
	PROCESS_UPDATE_LINES,
	PROCESS_UPDATE_SCORE,
	PROCESS_UPDATE_SPEED,
} from '../constants/process-constants'

const initialState = {
	speed: 0,
	score: 0,
	lines: 0,
}

export default function processReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case PROCESS_UPDATE:
			return {
				...state,
				...payload,
			}
		case PROCESS_UPDATE_LINES:
			return {
				...state,
				lines: payload.lines,
			}
		case PROCESS_UPDATE_SPEED:
			return {
				...state,
				speed: payload.speed,
			}

		case PROCESS_UPDATE_SCORE:
			return {
				...state,
				score: payload.score,
			}

		default:
			return state
	}
}
