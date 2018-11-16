import { combineReducers } from 'redux'
import processReducer from './process-reducer.js'
import nextShapeReducer from './next-shape-reducer'
import currentShapeReducer from './current-shape-reducer'
import boardReducer from './board-reducer'

export const rootReducer = combineReducers({
	process: processReducer,
	nextShape: nextShapeReducer,
	currentShape: currentShapeReducer,
	board: boardReducer,
})
