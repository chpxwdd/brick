import { combineReducers } from 'redux'
import processReducer from '../reducers/process-reducer.js'
import displayReducer from './display-reducer.js'

export const rootReducer = combineReducers({
	process: processReducer,
	display: displayReducer,
})
