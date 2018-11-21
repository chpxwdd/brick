import { matrix, matrixPairs } from './utils'

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
	// console.log('base', shapeMatrix)
	// console.log('transponse ', transponse(shapeMatrix))

	return { alias: alias, matrix: shapeMatrix }
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
			return [[2, 1], [3, 1], [1, 2], [2, 2]]
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
export const rotateLeft = base => {
	console.log(base)
	let m = base.length
	let n = base[0].length
	let matrix = []
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (!matrix[m - 1 - j]) {
				matrix[m - 1 - j] = []
			}
			matrix[m - 1 - j][i] = base[i][j]
		}
	}
	return matrix
}

export const rotateRight = base => {
	console.log(base)
	let m = base.length
	let n = base[0].length
	let matrix = []
	for (let i = 0; i < m; i++) {
		matrix[i] = []
		for (let j = 0; j < n; j++) {
			matrix[i][m - 1 - j] = base[j][i]
		}
	}
	return matrix
}

export const moveShape = (shape, moveDirection) => {
	return shape
}
