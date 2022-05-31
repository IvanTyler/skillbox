const cars: string[] = ['ford', 'audi']
const cars2: Array<string> = ['ford', 'audi'] // generic type

const promise = new Promise<string>(resolve => {
    setTimeout(() => {
        resolve('Promise resolved')
    }, 2000)
})

// promise.then(data => console.log(data))

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
    return Object.assign({}, a, b)
}

const merged = mergeObjects({ name: 'Ivan' }, { age: 29 })
const merged2 = mergeObjects({ name: 'Dima' }, { age: 28 })

// const merged3 = mergeObjects({a: 1}, 'bbb')


// console.log(merged3)

// ============

interface ILength {
    length: number
}

function widthCount<T extends ILength>(value: T): { value: T, count: string } {
    return {
        value,
        count: `В этом обьекте ${value.length} символов`
    }
}

// console.log(widthCount('Привет typeScript'));
// console.log(widthCount(['i', 'am', 'Array']));
// console.log(widthCount({ length: 20 }));

// ============

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}

const person = {
    name: 'Ivan',
    age: 26,
}

// console.log(getObjectValue(person, 'name'))
// console.log(getObjectValue(person, 'age'))
// console.log(getObjectValue(person, 'job'))

class Collection<T extends number | string | boolean> {

    constructor(private _items: T[] = []) { }

    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        this._items = this._items.filter(el => el !== item)
    }

    get items(): T[] {
        return this._items
    }
}

// const strings = new Collection<string>(['i', 'am', 'strings'])
// strings.add('kk')
// strings.remove('am')
// console.log(strings.items)

// const numbers = new Collection<number>([1, 2, 3])
// numbers.add(2)
// numbers.remove(3)
// console.log(numbers.items)

// const objs = new Collection([{a: 1}, {b: 2}])
// objs.remove({b: 2})

interface Car {
    model: string,
    year: number,
}

function createAndValidateCar(model: string, year: number): Car {
    const car: Partial<Car> = {}

    if (model.length > 3) {
        car.model = model
    }

    if (year > 2000) {
        car.year = year
    }

    return car as Car
}

const cars3: Readonly<Array<string>> = ['Ford', 'Audi'];
cars3[1]

const ford: Readonly<Car> = {
    model: 'Ford',
    year: 2020
}

// ford.model = 'Ferrary'



