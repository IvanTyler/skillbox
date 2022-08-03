function absentNumber(array) {
    const sortArray = array.sort((a, b) => a - b)
    if (sortArray[0] === 1) {
        for (let i = 0; i < sortArray.length; i++) {
            console.log(sortArray[i] + 1, 'nextElement>', sortArray[i + 1])
            if (sortArray[i + 1] !== sortArray[i] + 1) return sortArray[i] + 1
        }
    }
    return 1
}

console.log(absentNumber([5, 4, 2, 1]))

function absentNumber2(array) {
    const sortArray = array.sort((a, b) => a - b)
    for (let i = 0; i < sortArray.length; i++) {
        console.log(sortArray[i], i + 1)
        if (sortArray[i] !== i + 1) return i + 1
    }
    return sortArray.length + 1
}

console.log(absentNumber2([5, 4, 3, 2]))