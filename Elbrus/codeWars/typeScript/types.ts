const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.3
const num: number = 3e10

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArra2: Array<number> = [1, 1, 2, 3, 5, 8, 13] //дженерик тип

const words: string[] = ['string', 'Typescript']

// Tuple
const contact: [string, number] = ['Ivan', 1234567]

// Any
let variable: any = 42
// ...
variable = "New String"

// ===
function sayMyName(name: string): void {
    console.log(name);
}
sayMyName('Dima')

// Never
function throwError(message: string): never {
    throw new Error(message)
}

// function infinite(): never {
//     while (true) {

//     }
// }

// Type - создание собственных типов данных
type Login = string
const login: Login = 'admin'

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'

type SomeType = string | null | undefined


type SumB = (a: number, b: number) => number
interface SumA {
    (a: number, b: number): number;
}

const sum: SumA = (a, b) => a + b

function sumC(a: number, b: number): number {
    return a + b
}

type B = {
    name: string
}
interface A extends B {}

const b: A = {
    name: 'Ivan'
}

// Alias только для типов

type UnicueId = number;

interface User {
    id: UnicueId
}

type NamesA = string[]

interface NamesB {
    [key: number]: string
}

const NB: NamesB = [
    '3'
]

// кортеж - массив определенного размера длина которого неизменяется и выступает константой для массива

type State = [number, (n : number) => void]

const s: State = [123, (n) => {}]

// Union

type A2 = {
    age: number
}

type B2 = {
    name: string
}

type C2 = A2 | B2

interface Rectn extends A2, B2 {}

const objn: Rectn = {
    age: 22,
}

interface BB2 {
    name: string
}
interface BB2 {
    age: string
}

const User23: BB2 = {
    name: '',
    age: ''
}

// интерфейсы используется для доменной логики, данные Api

type Nullable<T> = T | null | undefined
