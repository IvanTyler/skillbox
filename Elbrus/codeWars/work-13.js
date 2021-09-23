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