import { matrixPairs } from './utils'

import { SHAPE_CELLS } from '../constants/dimention-constants'

export const getShape = (alias = null) => {
	if (!alias) {
		alias = randomShape(shapeList)
	}
	// console.log(alias, shapeMatrixConfig(alias))
	const shapeConfig = shapeMatrixConfig(alias)
	const shapeMatrix = []

	matrixPairs(SHAPE_CELLS).forEach((row, x) => {
		shapeMatrix[x] = []
		row.forEach((col, y) => {
			shapeMatrix[x][y] = 0
			shapeConfig.forEach(pair => {
				if (pair[0] === x && pair[1] === y) {
					shapeMatrix[x][y] = 1
				}
			})
		})
	})
	// console.log('source', shapeMatrix)
	// console.log('transponse ', transponse(shapeMatrix))

	return { alias: alias, matrix: shapeMatrix, angle: 0 }
}

const shapeList = ['I', 'O', 'T', 'S', 'Z', 'L', 'J']

const randomShape = shapeList => {
	return shapeList[Math.floor(Math.random() * shapeList.length)]
}

const shapeMatrixConfig = alias => {
	switch (alias) {
		case 'O':
			return [[1, 1], [2, 1], [1, 2], [2, 2]]
		case 'I':
			return [[0, 2], [1, 2], [2, 2], [3, 2]]
		case 'S':
			return [[1, 1], [2, 1], [2, 2], [3, 2]]
		case 'Z':
			return [[1, 1], [2, 1], [3, 2], [2, 2]]
		case 'L':
			return [[1, 1], [1, 2], [2, 2], [3, 2]]
		case 'J':
			return [[3, 1], [1, 2], [2, 2], [3, 2]]
		case 'T':
			return [[2, 1], [1, 2], [2, 2], [3, 2]]
		default:
			return []
	}
}

// const getShapeConfigFromMatrix = source => {
// 	let rows = source.length
// 	let cols = source[0].length
// 	let matrix = []
// 	for (let row = 0; row < rows; row++) {
// 		for (let col = 0; col < cols; col++) {}
// 	}
// 	return matrix
// }

/**
 * поворачивает матрицу source против часовой стрелке
 */
export const rotateLeft = source => {
	let rows = source.length
	let cols = source[0].length
	let matrix = []
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			if (!matrix[rows - 1 - col]) {
				matrix[rows - 1 - col] = []
			}
			matrix[rows - 1 - col][row] = source[row][col]
		}
	}
	return matrix
}

/**
 * поворачивает матрицу source по часовой стрелке против
 */
export const rotateRight = source => {
	let rows = source.length
	let cols = source[0].length
	let matrix = []
	for (let row = 0; row < rows; row++) {
		matrix[row] = []
		for (let col = 0; col < cols; col++) {
			matrix[row][rows - 1 - col] = source[col][row]
		}
	}
	return matrix
}
