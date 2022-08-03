const isPangram = (phrase: string): boolean => {
    const arr_en = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'
    ];

    const arrayPhrase = phrase.split('').
        filter(el => el !== ' ' && el !== '.').
        map(el => el.toLocaleLowerCase()).sort()

    const countingIdenticalLetters = arr_en.reduce((acc: any, key, index) => {
        acc[key] = 0
        arr_en.includes(arrayPhrase[index]) ? acc[key] = acc[key] + 1 : acc[key] = 0
        return acc
    }, {})


}

isPangram('This is not a pangram.')