"use strict";
function sortArray(array) {
    const sortOdd = array
        .filter((el) => el % 2 !== 0)
        .sort((a, b) => a - b);
    const replacingUnsortedOddNumbers = array.map((el, i) => el % 2 !== 0 ? el = deleteMinNumber(sortOdd) : el);
    function deleteMinNumber(arr) {
        return +arr.splice(arr.indexOf(Math.min(...arr)), 1).join('');
    }
    return array.length === 0 ? [] : replacingUnsortedOddNumbers;
}
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
// const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
// return array.map((x) => x % 2 ? odd.shift() : x);
