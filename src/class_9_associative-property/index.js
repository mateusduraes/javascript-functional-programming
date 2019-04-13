// Associative Property

console.log(1 + 2 + 3) // 6
console.log((1 + 2) + 3) // 6
console.log(1 + (2 + 3)) // 6

// Each of these operations is equivalent due to the associative property.
// This holds true for compositions.

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)
const scream = str => str.toUpperCase()
const exclaim = str => `${str}!`
const repeat = str => `${str} ${str}`

const comp1 = compose(repeat, exclaim, scream)
const comp2 = compose(compose(repeat, exclaim), scream)
const comp3 = compose(repeat, compose(exclaim, scream))

console.log(comp1('x'))
console.log(comp2('x'))
console.log(comp3('x'))

// comp1('x') === comp2('x') === comp3('x')
// Each of our compositions is the same! Learning this property of math
// allows us to conceive of ever more complex functions through the composition
// of compositions.