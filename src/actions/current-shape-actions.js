import { CURRENTT_SHAPE_UPDATE } from '../constants/current-shape-constants'

export const actionCurrentShapeUpdate = currentShape => {
	return {
		type: CURRENTT_SHAPE_UPDATE,
		payload: currentShape,
	}
}
