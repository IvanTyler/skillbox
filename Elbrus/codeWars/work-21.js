function lastDigit(n, d) {
    const arr = [n]
    const newArr = arr.join('').split('')
    const arrNumber = newArr.map(el => Number(el))
    const arrReverse = arrNumber.reverse()
    const newArrNumber = []
    for (let i = 0; i < d; i++) {
        newArrNumber.push(arrReverse[i])
    }
    const newArrNumberReverse = newArrNumber.reverse()
    if (d > arrNumber.length) {
        return newArrNumberReverse.filter((el, i) => {
            if (typeof i !== 'undefined') return el
        })
    }
    if (d > 0) {
        return newArrNumberReverse
    } else if (d <= 0) {
        return []
    }
}

console.log(lastDigit(123767, 0))