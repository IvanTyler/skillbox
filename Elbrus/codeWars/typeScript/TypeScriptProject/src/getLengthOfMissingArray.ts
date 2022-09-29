function getLengthOfMissingArray(arrayOfArrays: any[][]): number {
    if (arrayOfArrays === null || arrayOfArrays.length === 0) return 0

    const examinationEmptyArrs: boolean = arrayOfArrays.every(el => el === null || el.length === 0 ? 0 : el)
    if (!examinationEmptyArrs) return 0

    const sortArrsNumber: number[] = arrayOfArrays
        .map(el => el.length)
        .sort((a, b) => a - b)

    const countNumbers: any[] = []
    for (let i = sortArrsNumber[0]; i <= sortArrsNumber[sortArrsNumber.length - 1]; i++) {
        countNumbers.push(i)
    }

    const findNumber: number = +countNumbers.filter(el => {
        if (!sortArrsNumber.includes(el)) return el
    }).join('')

    console.log(sortArrsNumber, countNumbers, findNumber)
    return findNumber
}

console.log(getLengthOfMissingArray([
    [],
    [1],
    [3, 4, 2, 3],
    [0, 3, 0, 4, 2, 1],
    [0, 2, 2, 4, 3],
    [3, 4, 0],
    [2, 0, 1, 4, 4, 0, 2]]))