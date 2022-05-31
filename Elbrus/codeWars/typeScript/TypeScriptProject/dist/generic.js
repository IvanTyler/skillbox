"use strict";
const cars = ['ford', 'audi'];
const cars2 = ['ford', 'audi']; // generic type
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 2000);
});
// promise.then(data => console.log(data))
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Ivan' }, { age: 29 });
const merged2 = mergeObjects({ name: 'Dima' }, { age: 28 });
function widthCount(value) {
    return {
        value,
        count: `В этом обьекте ${value.length} символов`
    };
}
// console.log(widthCount('Привет typeScript'));
// console.log(widthCount(['i', 'am', 'Array']));
// console.log(widthCount({ length: 20 }));
// ============
//# sourceMappingURL=generic.js.map