// Task 5.6

const arr = [3, 1, 1, 3, 3];
let a = true;

arr.forEach( function (item, index, array){
for (let i = 0; i < arr.length ; i++){
  for (let j = i+1; j < arr.length; j++) {
	  if(arr[i] !== arr[j]) a = false
	  }
}})
console.log(a)




