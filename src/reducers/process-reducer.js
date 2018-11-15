import {
	PROCESS_CHANGE_SCORE,
	PROCESS_CHANGE_SPEED,
	PROCESS_CHANGE_STATUS,
	PROCESS_STOP,
} from '../constants/process-constants'

const initialState = {
	speed: 0,
	status: PROCESS_STOP,
	score: 0,
	lines: 0,
}

export default function processReducer(state = initialState, { type, payload }) {
	switch (type) {
		case PROCESS_CHANGE_STATUS:
			return {
				...state,
				status: payload.status,
			}
		case PROCESS_CHANGE_SPEED:
			return {
				...state,
				speed: payload.speed,
			}

		case PROCESS_CHANGE_SCORE:
			return {
				...state,
				score: payload.score,
			}

		default:
			return state
	}
}
