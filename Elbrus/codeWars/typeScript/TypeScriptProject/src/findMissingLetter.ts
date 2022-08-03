function findMissingLetter(array: string[]): string {
    const LowerCasearray: string[] = array.map(el => el.toLocaleLowerCase())
    const arr_en: string[] = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'
    ];

    const firstElement: string = LowerCasearray[0]
    const lastElement: string = LowerCasearray[LowerCasearray.length - 1]

    const sliceArr_en: string[] = arr_en.slice(arr_en.indexOf(firstElement), arr_en.indexOf(lastElement) + 1)

    const deleteEl: string[] = sliceArr_en.filter(el => {
        if (!LowerCasearray.includes(el)) return el
    })
    return array[0] === array[0].toUpperCase() ? deleteEl.join('').toUpperCase() : deleteEl.join('')
}

console.log(findMissingLetter(["a","b","c","d","f"]))