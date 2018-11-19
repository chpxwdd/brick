import {
	PROCESS_UPDATE,
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

export const actionProcessUpdateSpeed = speed => {
	return {
		type: PROCESS_UPDATE_SPEED,
		payload: {
			speed: speed,
		},
	}
}

export const actionProcessUpdateScore = score => {
	return {
		type: PROCESS_UPDATE_SCORE,
		payload: {
			score: score,
		},
	}
}

export const actionProcessUpdateLines = lines => {
	return {
		type: PROCESS_UPDATE_LINES,
		payload: {
			lines: lines,
		},
	}
}
