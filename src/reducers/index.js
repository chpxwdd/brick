import { combineReducers } from 'redux'
import processReducer from '../reducers/process-reducer.js'
import boardReducer from '../reducers/board-reducer.js'

export const rootReducer = combineReducers({
	process: processReducer,
	board: boardReducer,
})
