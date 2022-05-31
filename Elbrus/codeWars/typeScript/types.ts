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