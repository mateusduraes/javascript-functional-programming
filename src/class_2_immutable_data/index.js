// Immutable Data

// Mutable = can be changed after creation
// Imutable = can't be changed after creation

// Mutable examples
{
  const a = [1, 2, 3]
  const b = a
  console.log(a === b) // true
}

{
  const a = [1, 2, 3]
  const b = a
  b.push(4)
  console.log(a) // [1, 2, 3, 4]
}

{
  const a = { foo: 'bar' }
  const b = a
  b.foo = 'baz'
  console.log(a.foo) // baz
}

// Immutable Examples

{
  const push = value => array => {
    const clone = [...array]
    clone.push(value)
    return clone
  }

  const a = [1, 2, 3]
  const b = push(4)(a)
  console.log(a) // [1, 2, 3]
  console.log(a === b)
}