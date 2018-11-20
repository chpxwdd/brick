import {
	NEXT_SHAPE_UPDATE,
	NEXT_SHAPE_RESET,
} from '../constants/next-shape-constants'
import * as ShapeUtils from '../utils/shape-utils'

export const actionNextShapeUpdate = () => {
	return {
		type: NEXT_SHAPE_UPDATE,
		payload: ShapeUtils.getShape(),
	}
}

export const actionNextShapeReset = nextShape => {
	return {
		type: NEXT_SHAPE_RESET,
		payload: nextShape,
	}
}
