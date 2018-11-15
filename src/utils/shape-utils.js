export const emptyShape = [
	[2, 2],
	[1, 2],
	[0, 2],
	[-1, 2],
	[2, 1],
	[1, 1],
	[0, 1],
	[-1, 1],
	[2, 0],
	[1, 0],
	[0, 0],
	[-1, 0],
	[2, -1],
	[1, -1],
	[0, -1],
	[-1, -1],
]

// export const shapeList = ['I', '0', 'T', 'S', 'Z', 'L', 'J']
export const shapeList = ['I', '0', 'T', 'S', 'Z', 'L', 'J']

export const randomShape = shapeList => {
	return shapeList[Math.floor(Math.random() * shapeList.length)]
}

export const shapeMatrix = shape => {
	console.log('shape', shape)
	switch (shape) {
		case 'I':
			return [[0, -1], [0, 1], [0, 2]]
		case 'O':
			return [[0, 1], [1, 0], [1, 1]]
		case 'T':
			return [[0, 1], [1, 0], [-1, 0]]
		case 'S':
			return [[0, 1], [1, 0], [-1, 1]]
		case 'Z':
			return [[0, 1], [1, 1], [-1, 0]]
		case 'L':
			return [[1, 0], [-1, 0], [-1, -1]]
		case 'J':
			return [[1, 0], [-1, 0], [1, 1]]
		default:
			return emptyShape
	}
}
