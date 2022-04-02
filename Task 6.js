// Task 5.3.6

const arr = [1, 2, 3, 4, 5];
let a = false;

arr.forEach( function (item, index, array){
for (let i = index + 1; i < arr.length ; i++){
	  if(item === arr[i]) a = true
	  }
})
console.log(a)




