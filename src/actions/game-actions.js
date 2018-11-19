import { GAME_UPDATE } from '../constants/game-constants'

export const actionGameUpdate = payload => {
	return {
		type: GAME_UPDATE,
		payload: payload,
	}
}
