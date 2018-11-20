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
				width: COLS * CELL + SHAPE_CELLS * CELL + 2 * MARGIN,
				height: ROWS * CELL,
			}
		case BLOCK_BOARD:
			return {
				x: 0,
				y: 0,
				width: COLS * CELL,
				height: ROWS * CELL,
				cols: COLS,
				rows: ROWS,
			}
		case BLOCK_NEXT_SHAPE:
			return {
				x: MARGIN + COLS * CELL,
				y: (ROWS * CELL) / 2 - (SHAPE_CELLS * CELL) / 2,
				width: SHAPE_CELLS * CELL,
				height: SHAPE_CELLS * CELL,
				cols: SHAPE_CELLS,
				rows: SHAPE_CELLS,
			}
		case BLOCK_PROCESS:
			return {
				x: MARGIN + COLS * CELL,
				y: MARGIN,
				width: SHAPE_CELLS * CELL,
				height: SHAPE_CELLS * CELL,
			}
		default:
			return { x: 0, y: 0 }
	}
}
