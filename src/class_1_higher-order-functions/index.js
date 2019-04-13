// Higher Order Functions

// 1. Accepts a function as an argument
// 2. Returns a new function

const withCount = fn => {
	let count = 0;
	return (...args) => {
 		console.log(`Call count: ${++count}`)
		return fn(...args)
	}
}

const add = (x, y) => x + y
const countAdd = withCount(add)
countAdd(1, 3)
countAdd(2, 1)
countAdd(6, 7)