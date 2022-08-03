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
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'Ivan',
    age: 26,
};
// console.log(getObjectValue(person, 'name'))
// console.log(getObjectValue(person, 'age'))
// console.log(getObjectValue(person, 'job'))
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(el => el !== item);
    }
    get items() {
        return this._items;
    }
}
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
const cars3 = ['Ford', 'Audi'];
cars3[1];
const ford = {
    model: 'Ford',
    year: 2020
};
// ford.model = 'Ferrary'
