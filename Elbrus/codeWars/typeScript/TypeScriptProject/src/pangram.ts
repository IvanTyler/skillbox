const isPangram = (phrase: string): boolean => {
    const arr_en: string[] = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'
    ];
    const toLomerCaseArray: string[] = phrase.split('').map((el: any) => el.toLocaleLowerCase())

    const toLomerCaseArrayFilter: string[] = toLomerCaseArray.filter((el: any, index: number) => toLomerCaseArray.indexOf(el) === index)

    const newArrayPhrase: string[] = toLomerCaseArrayFilter.filter((el: any) => {
        if (arr_en.includes(el.toLocaleLowerCase())) {
            return el
        }
    })

    const countingIdenticalLetters: object = arr_en.reduce((acc: any, key, index) => {
        acc[key] = 0
        arr_en[arr_en.indexOf(newArrayPhrase[index])] ? acc[key] = acc[key] + 1 : acc[key] = 0
        return acc
    }, {})

    const values: number[] = Object.values(countingIdenticalLetters)

    return values.every((elem: number) => elem > 0);

}

console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'))
// ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ

// export const isPangram = (phrase: string): boolean => ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//   .every(l => phrase.toLowerCase().includes(l))