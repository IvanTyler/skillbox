"use strict";
function findMissingLetter(array) {
    const LowerCasearray = array.map(el => el.toLocaleLowerCase());
    const arr_en = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'
    ];
    const firstElement = LowerCasearray[0];
    const lastElement = LowerCasearray[LowerCasearray.length - 1];
    const sliceArr_en = arr_en.slice(arr_en.indexOf(firstElement), arr_en.indexOf(lastElement) + 1);
    const deleteEl = sliceArr_en.filter(el => {
        if (!LowerCasearray.includes(el))
            return el;
    });
    return array[0] === array[0].toUpperCase() ? deleteEl.join('').toUpperCase() : deleteEl.join('');
}
console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
