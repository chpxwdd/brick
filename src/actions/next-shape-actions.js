import { NEXT_SHAPE_UPDATE } from '../constants/next-shape-constants'

export const actionNextShapeUpdate = nextShape => {
	return {
		type: NEXT_SHAPE_UPDATE,
		payload: nextShape,
	}
}
