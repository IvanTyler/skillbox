function findOutlier(integers: number[]) {
    const oneOddNumber = Number(integers.filter(el => el % 2 !== 0).join(''))
    const oneEvenNumber = Number(integers.filter(el => el % 2 === 0).join(''))

    return Number(integers.filter(el => el % 2 !== 0)) ? oneOddNumber : oneEvenNumber
}

findOutlier([0, 1, 2])