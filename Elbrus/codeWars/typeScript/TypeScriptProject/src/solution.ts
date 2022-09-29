const solution = (str: string) => {
    if (str === '') return []
    if (str.length % 2 !== 0) {
        const arr_symboll = str.split('')

        const newArr: any[] = []
        function oddSymbolls(arr: string[]): any[] {
            newArr.push([...arr.splice(0, 2)])
            if (arr.length === 1) return newArr
            return oddSymbolls(arr_symboll)
        }
        oddSymbolls(arr_symboll)
        console.log(newArr.push([arr_symboll[0], '_']))

        return newArr.map(el => el.join(''))
    }
    else {
        const arr_symboll = str.split('')

        const newArr: any[] = []
        function oddSymbolls(arr: string[]): any[] {
            newArr.push([...arr.splice(0, 2)])
            if (arr.length === 0) return newArr
            return oddSymbolls(arr_symboll)
        }
        oddSymbolls(arr_symboll)

        return newArr.map(el => el.join(''))
    }

}

console.log(solution('BqaqIETYdPGJgyUtfychjFfPnEBcptnLDxbmT'))

'BqaqIETYdPGJgyUtfychjFfPnEBcptnLDxbm'
// Split Strings