import {
	BLOCK_DISPLAY,
	BLOCK_BOARD,
	BLOCK_NEXT_SHAPE,
	BLOCK_PROCESS,
	COLS,
	ROWS,
	CELL,
	MARGIN,
	SHAPE_CELLS,
} from '../constants/dimention-constants'

export const range = (start, end) => {
	let length = end - start
	return Array.from({ length }, (_, i) => start++)
}

export const matrix = (cols, rows = null) => {
	if (rows == null) {
		rows = cols
	}
	return range(0, rows).map((dx, i) => {
		return range(0, cols).map((dy, j) => {
			return 0
		})
	})
}

export const matrixPairs = (cols, rows = null) => {
	if (rows == null) {
		rows = cols
	}
	return range(0, rows).map((dx, i) => {
		return range(0, cols).map((dy, j) => {
			return 0
		})
	})
}

export const dimentions = block => {
	switch (block) {
		case BLOCK_DISPLAY:
			return {
				x: 0,
				y: 0,
				width: COLS * CELL + SHAPE_CELLS * CELL + 3 * MARGIN,
				height: ROWS * CELL + 2 * MARGIN,
			}
		case BLOCK_BOARD:
			return {
				x: MARGIN,
				y: MARGIN,
				width: COLS * CELL + SHAPE_CELLS * CELL + 3 * MARGIN,
				height: ROWS * CELL + 2 * MARGIN,
				cols: COLS,
				rows: ROWS,
			}
		case BLOCK_NEXT_SHAPE:
			return {
				x: 2 * MARGIN + COLS * CELL,
				y: 100,
				// y: ROWS * CELL + (2 * MARGIN) / 2 - (CELL * SHAPE_CELLS) / 2,
				width: SHAPE_CELLS * CELL,
				height: SHAPE_CELLS * CELL,
				cols: SHAPE_CELLS,
				rows: SHAPE_CELLS,
			}
		case BLOCK_PROCESS:
			return {
				x: 2 * MARGIN + COLS * CELL,
				y: MARGIN,
				width: SHAPE_CELLS * CELL,
				height: SHAPE_CELLS * CELL,
			}
		default:
			return { x: 0, y: 0 }
	}
}
