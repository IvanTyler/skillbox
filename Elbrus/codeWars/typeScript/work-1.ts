const minSum = (arr: number[]): number => {
    
    const minMaxArr: any[] = []
    function minMaxArrFunck(arr: number[]): number[] {
        minMaxArr.push([
            ...arr.splice(arr.indexOf(Math.max(...arr)), 1),
            ...arr.splice(arr.indexOf(Math.min(...arr)), 1),
        ])
        if (arr.length === 0) return minMaxArr
        return minMaxArrFunck(arr)
    }
    minMaxArrFunck(arr)

    return minMaxArr.map((el) => {
        return el.reduce((acc: number, curr: number) => {
            return acc * curr
        }, 1)
    }).reduce((acc: number, curr: number) => {
        return acc + curr
    }, 0)

}

console.log(minSum([5, 4, 2, 3]))