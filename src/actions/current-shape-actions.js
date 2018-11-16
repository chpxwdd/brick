import { CURRENT_SHAPE_UPDATE } from '../constants/current-shape-constants'

export const actionCurrentShapeUpdate = currentShape => {
	return {
		type: CURRENT_SHAPE_UPDATE,
		payload: currentShape,
	}
}
