import {
	PROCESS_READY,
	PROCESS_RUN,
	PROCESS_PAUSE,
	PROCESS_CONTINUE,
	PROCESS_STOP,
	PROCESS_DECELERATE,
	PROCESS_ACCELERATE,
	PROCESS_CHANGE_SPEED,
	PROCESS_CHANGE_SCORE,
} from '../constants/process-constants'

export const actionProcessReady = status => {
	return {
		type: PROCESS_READY,
		payload: {
			status: status,
		},
	}
}
export const actionProcessRun = status => {
	return {
		type: PROCESS_RUN,
		payload: {
			status: status,
		},
	}
}

export const actionProcessPause = status => {
	return {
		type: PROCESS_PAUSE,
		payload: {
			status: status,
		},
	}
}

export const actionProcessContinue = status => {
	return {
		type: PROCESS_CONTINUE,
		payload: {
			status: status,
		},
	}
}

export const actionProcessStop = status => {
	return {
		type: PROCESS_STOP,
		payload: {
			status: status,
		},
	}
}

export const actionProcessDecelerate = speed => {
	return {
		type: PROCESS_DECELERATE,
		payload: {
			speed: speed--,
		},
	}
}

export const actionProcessAccelerate = speed => {
	return {
		type: PROCESS_ACCELERATE,
		payload: {
			speed: speed++,
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
