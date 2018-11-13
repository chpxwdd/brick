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
		case 'READY':
			return {
				...state,
				payload: { speed: 0, status: payload.status },
			}
		case 'RUN':
			return {
				...state,
				payload: {
					speed: 1,
					status: payload.status,
				},
			}
		case 'PAUSE':
			return {
				...state,
				payload: {
					speed: 0,
					status: payload.status,
				},
			}
		case 'CONTINUE':
			return {
				...state,
				payload: {
					speed: payload.speed,
					status: payload.status,
				},
			}
		case 'STOP':
			return {
				...state,
				payload: {
					speed: 0,
					status: payload.status,
				},
			}
		case 'SPEED_UP':
			return {
				...state,
				payload: {
					speed: state.speed++,
				},
			}
		case 'SPEED_DOWN':
			return {
				...state,
				payload: {
					speed: state.speed--,
				},
			}
		default:
			return state
	}
}
