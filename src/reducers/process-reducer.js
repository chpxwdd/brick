import {
	PROCESS_UPDATE,
	PROCESS_UPDATE_LINES,
	PROCESS_UPDATE_SCORE,
	PROCESS_UPDATE_SPEED,
	PROCESS_UPDATE_STATUS,
} from '../constants/process-constants'

import { RUN, STOP, PAUSE } from '../constants/control-constants'

const initialState = {
	speed: 0,
	status: STOP,
	score: 0,
	lines: 0,
}

export default function processReducer(state = initialState, { type, payload }) {
	switch (type) {
		case PROCESS_UPDATE:
			return {
				...state,
				payload,
				// score: payload.score,
				// speed: payload.speed,
				// status: payload.status,
				// lines: payload.lines,
			}
		case PROCESS_UPDATE_LINES:
			return {
				...state,
				lines: payload.lines,
			}
		case PROCESS_UPDATE_STATUS:
			return {
				...state,
				status: payload.status,
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
