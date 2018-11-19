import { GAME_UPDATE } from '../constants/game-constants'

export const actionGameUpdate = status => {
	console.log(status)
	return {
		type: GAME_UPDATE,
		payload: status.toString(),
	}
}
