"use strict";
const isPangram = (phrase) => {
    const arr_en = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'
    ];
    const toLomerCaseArray = phrase.split('').map((el) => el.toLocaleLowerCase());
    const toLomerCaseArrayFilter = toLomerCaseArray.filter((el, index) => toLomerCaseArray.indexOf(el) === index);
    const newArrayPhrase = toLomerCaseArrayFilter.filter((el) => {
        if (arr_en.includes(el.toLocaleLowerCase())) {
            return el;
        }
    });
    const countingIdenticalLetters = arr_en.reduce((acc, key, index) => {
        acc[key] = 0;
        arr_en[arr_en.indexOf(newArrayPhrase[index])] ? acc[key] = acc[key] + 1 : acc[key] = 0;
        return acc;
    }, {});
    const values = Object.values(countingIdenticalLetters);
    return values.every((elem) => elem > 0);
};
console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'));
// ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ
// export const isPangram = (phrase: string): boolean => ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//   .every(l => phrase.toLowerCase().includes(l))
