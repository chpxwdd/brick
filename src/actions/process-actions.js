import { PROCESS_CHANGE_STATUS, PROCESS_CHANGE_SPEED, PROCESS_CHANGE_SCORE } from '../constants/process-constants'

export const actionProcessChangeStatus = status => {
	return {
		type: PROCESS_CHANGE_STATUS,
		payload: {
			status: status,
		},
	}
}

export const actionProcessChangeSpeed = speed => {
	return {
		type: PROCESS_CHANGE_SPEED,
		payload: {
			speed: speed,
		},
	}
}

export const actionProcessChangeScore = score => {
	return {
		type: PROCESS_CHANGE_SCORE,
		payload: {
			score: score,
		},
	}
}
