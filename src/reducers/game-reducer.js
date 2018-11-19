import { STOP, GAME_UPDATE } from '../constants/game-constants'

export default function gameReducer(state = STOP, { type, payload }) {
	// console.log(type, payload)
	switch (type) {
		case GAME_UPDATE:
			return {
				...state,
				payload,
			}
		default:
			return state
	}
}
