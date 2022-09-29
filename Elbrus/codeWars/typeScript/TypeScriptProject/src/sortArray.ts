function sortArray(array: number[]): number[] {
    const sortOdd = array
        .filter((el: number) => el % 2 !== 0)
        .sort((a: number, b: number) => a - b)

    const replacingUnsortedOddNumbers = array.map((el: number, i: number) => el % 2 !== 0 ? el = deleteMinNumber(sortOdd) : el)

    function deleteMinNumber(arr: number[]) {
        return +arr.splice(arr.indexOf(Math.min(...arr)), 1).join('')
    }

    return array.length === 0 ? [] : replacingUnsortedOddNumbers
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))

// const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
// return array.map((x) => x % 2 ? odd.shift() : x);