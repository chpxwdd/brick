export const boardCombineShape = (board, shape) => {
	var combine = []
	return combine
}

export const boardDropLine = (board, dy) => {
	return board
}

export const boardCheckShapePosition = (board, shape) => {
	return board
}

export const checkColisions = (board, currentShape) => {
	let colision = false

	// получить все пустые ячейки board в массив строковых элесентов вида "{dx}:{dy}"
	boardVacantCells(board)

	// получить ячейки currentShape относительно board в массив строковых элесентов вида "{dx}:{dy}"
	const { dx, dy, matrix } = currentShape
	let currentShapeCells = []
	console.log(currentShape)
	matrix.forEach((row, y) => {
		row.forEach((col, x) => {
			if (col === 1) {
				currentShapeCells.push(String(dx + x) + ':' + String(dy + y))
			}
		})
	})
	console.log('currentShapeCells', currentShapeCells)
	// let s = new Set(currentShapeCells.concat(boardVacantCells(board)))
	// let it = s.values()
	// console.log(Array.from(it))

	// console.log(currentShapeCells.concat(boardVacantCells(board)))

	// обьединить в один массив и сравнить количество элементов с сумой элементов исходных массивов

	return colision
}

const boardVacantCells = board => {
	let boardVacantCells = []
	board.forEach((row, dy) => {
		row.forEach((col, dx) => {
			if (col === 0) {
				boardVacantCells.push(String(dx) + ':' + String(dy))
			}
		})
	})
	return boardVacantCells
}
