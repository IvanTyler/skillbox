function findUniq(arr: number[]): number {
    const countEl = arr.reduce((acc: any, key) => {
        !acc[key] ? acc[key] = 1 : acc[key] = acc[key] + 1
        return acc
    }, {})

    let findEl = ''
    for (let key in countEl) {
        if (countEl[key] === 1) findEl = key
    }

    return +findEl
}

console.log(findUniq([3, 10, 3, 3, 3]))

// return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );