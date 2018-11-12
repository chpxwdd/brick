export const range = (start, end) => {
	let length = end - start
	return Array.from({ length }, (_, i) => start++)
}
