"use strict";
function createPhoneNumber(numbers) {
    const codeOperators = numbers.slice(0, 3).join('').split('');
    const bracketFirst = codeOperators.splice(0, 0, '(');
    const bracketLast = codeOperators.splice(codeOperators.length, 0, ')');
    const addSpace = codeOperators.splice(codeOperators.length, 0, ' ');
    const joinCodeOperators = codeOperators;
    const copyNumbers = numbers.slice(0).join('').split('');
    const spliceNumbers = copyNumbers.splice(0, 3);
    const pushDash = copyNumbers.splice(3, 0, '-');
    const joinNumbers = copyNumbers;
    return [...joinCodeOperators, ...joinNumbers].join('');
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// function createPhoneNumber(numbers) {
//     return numbers.reduce((p, c) => p.replace('x', c), "(xxx) xxx-xxxx");
// }
