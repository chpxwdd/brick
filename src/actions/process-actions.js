import { PROCESS_CHANGE_STATUS, PROCESS_CHANGE_SPEED, PROCESS_CHANGE_SCORE } from '../constants/process-constants'

export const actionProcessChangeStatus = newValue => {
	return {
		type: PROCESS_CHANGE_STATUS,
		payload: {
			status: newValue,
		},
	}
}

export const actionProcessChangeSpeed = newValue => {
	return {
		type: PROCESS_CHANGE_SPEED,
		payload: {
			speed: newValue,
		},
	}
}

export const actionProcessChangeScore = newValue => {
	return {
		type: PROCESS_CHANGE_SCORE,
		payload: {
			score: newValue,
		},
	}
}

export const actionProcessChangeActionAllow = newValue => {
	return {
		type: PROCESS_CHANGE_SCORE,
		payload: {
			actionAllow: newValue,
		},
	}
}
