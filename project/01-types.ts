const s: string = 'Tratata';
const isTrue: boolean = true;
const isFalse: boolean = false;
const int: number = 10;
const float: number = 4.5;
const num: number = 3e10;
// int = 'trarara'; // error

const numberArray: number[] = [1, 2, 3];
const numberArray2: Array<number> = [1, 2, 3]; // generic types

const words: string[] = ['q', 'w', 'e'];

// tuple
const contact: [string, number] = ['Kate', 13456];

// any
let variable: any = 42;
variable = 'tratata';

// void
function sayMyName(name: string): void { // returns nothing
  console.log(name)
}

sayMyName('Qwerty');

// never - стоит использовать, когда функция либо возвращает отшибку и никогда не заканчивает свое выполнение, либо когда она постоянно что-то делает

function throwError(message: string): never {
  throw new Error(message)
}

function infinite(): never {
  while (true) {
    // ... 
  }
}

// type (создание своих типов) - могут быть удобны в разработке, потому как более информативны
type Login = string;
const login: Login = 'admin';
// const login1: Login = 122;

type ID = string | number;
const id1: ID = 123;
const id2: ID = '123';
// const id3: ID = false; // error

// null & undefined

type someType = string | null | undefined;
