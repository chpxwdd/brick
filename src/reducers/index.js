import { combineReducers } from 'redux'
import { default as control } from '../reducers/control-reducers.js'

export const rootReducer = combineReducers({
	control,
})
