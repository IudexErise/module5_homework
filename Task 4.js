// Task 5.3.4

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}
console.log(getRandomIntInclusive(1, 100));