export default (state = { status: '', speed: 0 }, { type, payload }) => {
	switch (type) {
		case 'READY':
			return {
				...state,
				speed: 0,
				status: payload.status,
			}
		case 'RUN':
			return {
				...state,
				speed: 1,
				status: payload.status,
			}
		case 'PAUSE':
			return {
				...state,
				speed: 0,
				status: payload.status,
			}
		case 'CONTINUE':
			return {
				...state,
				speed: payload.speed,
				status: payload.status,
			}
		case 'STOP':
			return {
				...state,
				speed: 0,
				status: payload.status,
			}
		case 'SPEED_UP':
			return {
				...state,
				speed: payload.speed, // speed + 1,
				// status: payload.status,
			}
		case 'SPEED_DOWN':
			return {
				...state,
				speed: payload.speed, // speed - 1,
				// status: payload.status,
			}

		default:
			return state
	}
}
