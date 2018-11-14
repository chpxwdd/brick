import {
	PROCESS_READY,
	PROCESS_RUN,
	PROCESS_PAUSE,
	PROCESS_CONTINUE,
	PROCESS_STOP,
	PROCESS_DECELERATE,
	PROCESS_ACCELERATE,
	PROCESS_CHANGE_SCORE,
	PROCESS_CHANGE_SPEED,
} from '../constants/process-constants'

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
		case PROCESS_READY:
			return {
				...state,
				payload: { speed: 0, status: payload.status },
			}
		case PROCESS_RUN:
			return {
				...state,
				payload: {
					speed: 1,
					status: payload.status,
				},
			}
		case PROCESS_PAUSE:
			return {
				...state,
				payload: {
					speed: 0,
					status: payload.status,
				},
			}
		case PROCESS_CONTINUE:
			return {
				...state,
				payload: {
					speed: payload.speed,
					status: payload.status,
				},
			}
		case PROCESS_STOP:
			return {
				...state,
				payload: {
					speed: 0,
					status: payload.status,
				},
			}
		case PROCESS_ACCELERATE:
			return {
				...state,
				payload: {
					speed: state.speed++,
				},
			}
		case PROCESS_DECELERATE:
			return {
				...state,
				payload: {
					speed: state.speed--,
				},
			}
		case PROCESS_CHANGE_SPEED:
			return {
				...state,
				payload: {
					speed: payload.speed,
				},
			}
		case PROCESS_CHANGE_SCORE:
			return {
				...state,
				payload: {
					speed: payload.speed--,
				},
			}
		default:
			return state
	}
}
