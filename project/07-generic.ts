const arrayOfNumbers: Array<Number> = [1, 2, 3];
const arrayOfStrings: Array<String> = ['1', '2', '3'];

// разные типы данных возможны

function reverse<T>(array: T[]): T[] { // функция работает с типом Т, принимает массив типа Т, и вернем массив типа Т. Функция будет подстраиваться под текущий тип
  return array.reverse();
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)