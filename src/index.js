import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import configureStore from './store/configureStore'
import { range } from './utils/utils'
import { combineReducers, createStore } from 'redux'
import './index.css'
import App from './containers/App'

import registerServiceWorker from './registerServiceWorker'

function processReducer(state = {}, { type, payload }) {
	switch (type) {
		case 'RUN':
			return payload.status
		default:
			return state
	}
}

function boardReducer(state = [], action) {
	return state
}

const allReducers = combineReducers({
	process: processReducer,
	// stat: statReducer,
	// currentShape: currentShapeReducer,
	// nextShape: nextShapeReducer,
	board: boardReducer,
})

const initialStore = {
	process: {
		speed: 1, // max 10
		status: 'ready', // 'ready'|'run'|'pause'|'continue'|'stop'
	},
	stat: {
		score: 0,
		lines: 0,
	},
	currentShape: [],
	nextShape: [],
	board: range(0, 20).map((dx, i) => {
		return range(0, 10).map((dy, j) => {
			// const pair =
			return 0
		})
	}),
}

const store = createStore(allReducers, initialStore, window.devToolsExtension && window.devToolsExtension())

console.log(store.getState())

const processRunAction = status => {
	return {
		type: 'PROCESS_RUN',
		payload: {
			status: status,
		},
	}
}

const processAction = {
	type: 'PROCESS_RUN',
	payload: {
		status: 'run',
	},
}

store.dispatch(processAction)

render(
	<div>
		<Provider store={store}>
			<App />
		</Provider>
	</div>,
	document.getElementById('root')
)

registerServiceWorker()
