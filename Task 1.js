// Task 5.1

let a = prompt('Enter number');
if (typeof(+a) === 'number' && !isNaN(+a)) {
  if (a % 2 === 0) {
    console.log('The number is even')
  } else {
    console.log('The number is odd')
  }
} else {
  console.log('Oops, you made a mistake')
}