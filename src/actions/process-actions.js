import {
	PROCESS_UPDATE,
	PROCESS_UPDATE_STATUS,
	PROCESS_UPDATE_LINES,
	PROCESS_UPDATE_SPEED,
	PROCESS_UPDATE_SCORE,
} from '../constants/process-constants'

export const actionProcessUpdate = process => {
	return {
		type: PROCESS_UPDATE,
		payload: process,
	}
}

export const actionProcessUpdateStatus = newValue => {
	return {
		type: PROCESS_UPDATE_STATUS,
		payload: {
			status: newValue,
		},
	}
}

export const actionProcessUpdateSpeed = newValue => {
	return {
		type: PROCESS_UPDATE_SPEED,
		payload: {
			speed: newValue,
		},
	}
}

export const actionProcessUpdateScore = newValue => {
	return {
		type: PROCESS_UPDATE_SCORE,
		payload: {
			score: newValue,
		},
	}
}

export const actionProcessUpdateLines = newValue => {
	return {
		type: PROCESS_UPDATE_LINES,
		payload: {
			lines: newValue,
		},
	}
}
