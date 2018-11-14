import { PROCESS_CHANGE_SCORE, PROCESS_CHANGE_SPEED, PROCESS_CHANGE_STATUS } from '../constants/process-constants'

const initialState = {
	speed: 0, // max 10
	status: '', // 'ready'|'run'|'pause'|'continue'|'stop'
	score: 0,
	lines: 0,
	currentShape: {},
	nextShape: {},
}

export default function processReducer(state = initialState, { type, payload }) {
	switch (type) {
		case PROCESS_CHANGE_STATUS:
			console.log(type)
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
