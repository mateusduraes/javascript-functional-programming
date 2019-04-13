const map = fn => xs => xs.map(fn)
const split = pattern => str => str.split(pattern)
const join = separator => xs => xs.join(separator)
const lowerCase = str => str.toLowerCase()

const trace = msg => x => (console.log(msg, x), x)

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)

const bookTitles = [
  'The Culture Code',
  'Designing Your Life',
  'Algorithms to Live By',
]

const slugfy = compose(
  join('-'),
  trace('After something'),
  map(split(' ')),
  trace('After lowercase'),
  map(lowerCase),
  trace('Before Lowercase')
)

const slugs = slugfy(bookTitles)
console.log('slugs', slugs)