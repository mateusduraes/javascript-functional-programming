// Pointfree Programming

// Is all about remove the anonymous functions like the following

// Without pointfree programming
{
  const array = [1, 2, 3]
  array.map(x => x * 2 )
}

// With pointfree programming
{
  const array = [1, 2, 3]
  const double = x => x * 2
  array.map(double)
}


// What we gain using pointfree programming?
// Legibility
// We reduce the surface area for bugs by not introducing new interim variables.
// We can make unit tests in our named functions
