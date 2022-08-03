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

const arr = [
    { higth: '100' },
    { width: '50' },
    { mass: '70' },
    { lb: '150' },
    { kg: '200' },
];

let newKeys = arr.map(el => {
    let width = Object.keys(el)
    return width.join()
})

console.log(newKeys)

let newValue = arr.map(el => {
    let width = Object.values(el)
    return width.join()
})

let newObj = arr.reduce((acc, curr, el) => {
    acc[newKeys[el]] = newValue[el]
    return acc
}, {})

console.log(newObj)

let string = 'bitcoin take over the world maybe who knows perhaps'
let newString = string.split(' ')
let min = newString[0].length

newString.forEach(el => {
    if (min > el.length) {
        min = el
    }
    return min.length
})
// console.log(min);
