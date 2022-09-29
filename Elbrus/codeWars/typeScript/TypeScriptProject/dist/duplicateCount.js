"use strict";
function duplicateCount(text) {
    const countSymbols = text
        .split('')
        .map(el => el.toLowerCase())
        .reduce((acc, key) => {
        !acc[key] ? acc[key] = 1 : acc[key] = acc[key] + 1;
        return acc;
    }, {});
    return Object.values(countSymbols)
        .filter((el) => el > 1).length;
}
console.log(duplicateCount('Indivisibilities'));
// export function duplicateCount(text: string): number{
//     const values = text.toLowerCase();
//     const distinctValues = [... new Set(values)];
//     const count = (s: string) => values.split(s).length - 1 > 1 ;
//     return distinctValues.filter(value => count(value)).length;
//   }
