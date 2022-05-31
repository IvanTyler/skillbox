interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person

let myName: PersonKeys = 'name'
myName = 'age'

type User = {
    _id: Number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createAt'>
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>

let user1: UserKeysNoMeta1 = 'name'
// user1 = '_id'
