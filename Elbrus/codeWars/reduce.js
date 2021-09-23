const sortItems = (array) => {
    const reducedArray = array.reduce((acc, curr) => {
        
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {})

    console.log(reducedArray)

    const keys = Object.keys(reducedArray);

    return keys.sort((a, b) => (
        reducedArray.b - reducedArray.a
    ))
}

let arrStr = ['aaa', 'aaa', 'aaa', 'ccc', 'bbb', 'bbb'];

console.log(sortItems(arrStr))
