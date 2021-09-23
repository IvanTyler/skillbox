function highAndLow(numbers) {
    let newArr = numbers.split(' ')
    let numberArr = newArr.map(el => +el)

    let min = numberArr[0]
    numberArr.forEach(el => {
        if (min > el) {
            min = el
        }
        return min
    })

    let max = numberArr[0]
    numberArr.forEach(el => {
        if (max < el) {
            max = el
        }
        return max
    })

    let arrMinMaxNumber = [max, min]
    let newString = arrMinMaxNumber.join(' ')
    return newString
}

console.log('>>>', highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))