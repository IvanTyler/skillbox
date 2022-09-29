const findOdd = (xs: number[]) => {
    const countNumbers: any = xs.reduce((acc: any, key) => {
        !acc[key] ? acc[key] = 1 : acc[key] = acc[key] + 1
        return acc
    }, {})

    const findOddNumber: string = Object.values(countNumbers).filter((el: any) => el % 2 !== 0).join('')
    const typeNumberOddNumber: number = Number(findOddNumber)

    let oddNumber = ''
    for (let key in countNumbers) {
        countNumbers[key] === typeNumberOddNumber ? oddNumber = key : null
    }

    return Number(oddNumber)
};

console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]))

// return xs.reduce( (a,b)=> a^b);


