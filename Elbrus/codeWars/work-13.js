function findMultiples(integer, limit) {
  let newArr = [];
  console.log('limit >>>', limit)
  for (let i = 1; i <= limit; i++) {
    if (i % integer === 0) {
      newArr.push(i)
    }
  }
  console.log(newArr)
  return newArr
}

console.log(findMultiples(5, 50))
let arr = [5,2,8];

let indexPrev;
let indexNext;
let summaPrev;
let summaNext;
let summa;
for (let i = 0; i < arr.length; i++){
    indexPrev = arr[i];
    indexNext = arr[i + 1];
    if(indexPrev > indexNext){
        summaPrev = indexPrev - indexNext;
        console.log(summaPrev);
    } else if(indexNext > indexPrev){
        summaNext = indexNext - indexPrev;
        console.log(summaNext);
    } else {
        summa = summaPrev + summaNext;
        console.log(summa);
    }
}
