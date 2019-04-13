// Currying 

/*
  It is the act of taking a function that normally receives n+1 arguments,
  and refactoring it so that it becomes a higher-order function that returns a series of functions
  each accepting only one argument and only evaluating once we receive our final argument.
*/

// Not currying
{
  const add = (x, y) => x + y
  const value = add(3, 5)
  console.log('value', value) // 8
}

// currying without ES6
{
  function add(x) {
    return function(y) {
      return x + y
    }
  }
  const value = add(3)(5)
  console.log('value', value) // 8
}

// currying
{
  const add = x => y => x + y
  const value = add(3)(5)
  console.log('value', value) // 8
}

// currying - Reusing a higher-order function
{
  const add = x => y => x + y
  const addThree = add(3)
  const value = addThree(5)
  console.log('value', value) // 8
  const value2 = addThree(10)
  console.log('value2', value2) // 13

}
