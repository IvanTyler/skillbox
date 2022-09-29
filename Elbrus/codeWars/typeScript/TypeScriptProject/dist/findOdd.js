"use strict";
const findOdd = (xs) => {
    const countNumbers = xs.reduce((acc, key) => {
        !acc[key] ? acc[key] = 1 : acc[key] = acc[key] + 1;
        return acc;
    }, {});
    const findOddNumber = Object.values(countNumbers).filter((el) => el % 2 !== 0).join('');
    const typeNumberOddNumber = Number(findOddNumber);
    let oddNumber = '';
    for (let key in countNumbers) {
        countNumbers[key] === typeNumberOddNumber ? oddNumber = key : null;
    }
    return Number(oddNumber);
};
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
// return xs.reduce( (a,b)=> a^b);
