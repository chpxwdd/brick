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

	return { angle: 0, alias: alias, matrix: shapeMatrix }
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

export const rotateMatrix = matrix => {}

export const transponse = base => {
	let _base = matrix(SHAPE_CELLS)
	base.forEach((row, i) => {
		row.forEach((val, j) => {
			_base[j][i] = base[i][j]
		})
	})
	return _base
}

export const moveShape = (shape, moveDirection) => {
	return shape
}
