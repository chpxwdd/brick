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

const readyProcessAction = status => {
	return {
		type: PROCESS_READY,
		payload: {
			status: status,
		},
	}
}
const runProcessAction = status => {
	return {
		type: PROCESS_RUN,
		payload: {
			status: status,
		},
	}
}

const pauseProcessAction = status => {
	return {
		type: PROCESS_PAUSE,
		payload: {
			status: status,
		},
	}
}

const continueProcessAction = status => {
	return {
		type: PROCESS_CONTINUE,
		payload: {
			status: status,
		},
	}
}

const stopProcessAction = status => {
	return {
		type: PROCESS_STOP,
		payload: {
			status: status,
		},
	}
}

const slowlyProcessAction = speed => {
	return {
		type: PROCESS_DECELERATE,
		payload: {
			speed: speed--,
		},
	}
}

const fasterProcessAction = speed => {
	return {
		type: PROCESS_ACCELERATE,
		payload: {
			speed: speed++,
		},
	}
}

const changeSpeedAction = speed => {
	return {
		type: PROCESS_CHANGE_SPEED,
		payload: {
			speed: speed,
		},
	}
}

const changeScoreAction = score => {
	return {
		type: PROCESS_CHANGE_SCORE,
		payload: {
			score: score,
		},
	}
}
