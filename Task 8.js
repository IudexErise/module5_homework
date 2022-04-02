// Task 5.8

let myMap = new Map ();
myMap.set('apple', 5);
myMap.set(10, 'watermelon');
myMap.set(null, 'yes');
myMap.set(true, 158);

myMap.forEach((value, key, map) => {
  console.log(`Key - ${key}, Value - ${value}`); 
});