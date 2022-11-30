interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name';
key = 'age';

// key = 'tratata' // error

// -----------

type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}

// вазять все, исключив указанные
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'

// вазять указанные
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'

let u1: UserKeysNoMeta1 = 'email'