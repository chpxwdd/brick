export const COLS = 10
export const ROWS = 20
export const CELL = 40
export const BORDER = 2
export const COLOR = '#a4b5af'
export const LIGHT = '#bacbc5'
export const DARK = '#616f6b'
export const STROKE_WIDTH = 2
export const MARGIN = 20
export const SHAPE_CELLS = 4

export const BLOCK_DISPLAY = 'DISPLAY'
export const BLOCK_NEXT_SHAPE = 'NEXT_SHAPE'
export const BLOCK_BOARD = 'BOARD'
export const BLOCK_STATISTICS = 'STATISTICS'
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
				x: 0,
				y: 0,
				width: COLS * CELL + SHAPE_CELLS * CELL + 3 * MARGIN,
				height: ROWS * CELL + 2 * MARGIN,
				cols: COLS,
				rows: ROWS,
			}
		case BLOCK_NEXT_SHAPE:
			return {
				x: 2 * MARGIN + COLS * CELL,
				y: 0,
				width: SHAPE_CELLS * CELL,
				height: SHAPE_CELLS * CELL,
				cols: SHAPE_CELLS,
				rows: SHAPE_CELLS,
			}
		case BLOCK_STATISTICS:
			return {
				x: 2 * MARGIN + COLS * CELL,
				y: MARGIN,
				width: SHAPE_CELLS * CELL,
				height: SHAPE_CELLS * CELL,
			}
	}
}
