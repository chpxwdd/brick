import { combineReducers } from 'redux'
import gameReducer from './game-reducer.js'
import processReducer from './process-reducer.js'
import nextShapeReducer from './next-shape-reducer'
import currentShapeReducer from './current-shape-reducer'
import boardReducer from './board-reducer'

export const rootReducer = combineReducers({
	game: gameReducer,
	process: processReducer,
	nextShape: nextShapeReducer,
	currentShape: currentShapeReducer,
	board: boardReducer,
})
