export const range = (start, end) => {
	let length = end - start
	return Array.from({ length }, (_, i) => start++)
}

export const matrix = (rows, cols = null) => {
	if (rows == null) {
		rows = cols
	}
	return range(0, rows).map((dx, i) => {
		return range(0, cols).map((dy, j) => {
			return 0
		})
	})
}
