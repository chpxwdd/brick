const readyProcessAction = status => {
	return {
		type: 'READY',
		payload: {
			status: status,
		},
	}
}
const runProcessAction = status => {
	return {
		type: 'RUN',
		payload: {
			status: status,
		},
	}
}

const pauseProcessAction = status => {
	return {
		type: 'PAUSE',
		payload: {
			status: status,
		},
	}
}

const continueProcessAction = status => {
	return {
		type: 'CONTINUE',
		payload: {
			status: status,
		},
	}
}

const stopProcessAction = status => {
	return {
		type: 'STOP',
		payload: {
			status: status,
		},
	}
}

const speedUpProcessAction = speed => {
	return {
		type: 'SPPED_UP',
		payload: {
			speed: speed,
		},
	}
}
