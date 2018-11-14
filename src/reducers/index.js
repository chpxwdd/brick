import { combineReducers } from 'redux'
import processReducer from '../reducers/process-reducer.js'
import boardReducer from './display-reducer.js'

export const rootReducer = combineReducers({
	process: processReducer,
	board: boardReducer,
})
