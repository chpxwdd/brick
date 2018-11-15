import { combineReducers } from 'redux'
import processReducer from './process-reducer.js'
import nextShapeReducer from './next-shape-reducer'
import boardReducer from './board-reducer'
// import displayReducer from './display-reducer'

export const rootReducer = combineReducers({
	process: processReducer,
	nextShape: nextShapeReducer,
	board: boardReducer,
	// display: displayReducer,
})
