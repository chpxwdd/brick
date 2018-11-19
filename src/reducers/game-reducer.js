import { STOP, GAME_UPDATE } from '../constants/game-constants'

export default function gameReducer(state = STOP, { type, payload }) {
	switch (type) {
		case GAME_UPDATE:
			return payload
		default:
			return state
	}
}
