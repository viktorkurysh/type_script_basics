// Boolean
const bool: boolean = false;

// Number
const num: number = 3;

// String
const str: string = 'Hello there!';

// Null and Undefined
const n: null = null;
const udef: undefined = undefined;

let someNumber = null;

function uppercaseFirstLetter(str: string) {
  return str[0].toUpperCase() + str.substr(1);
}

// Primitivies
type primitiveTypes = boolean | number | string | symbol | null | undefined;

// Object
const obj: object = [];

// Void
function log(message: string): void {
  console.log(message);
}

// Array
const arr1: string[] = ['x', 'y'];
const arr2: Array<string> = arr1;

// Tuple, fixed nubmer of elements in array
const tuple: [string, number] = ['str', 3];

// Enum
enum Color {
  Red,
  Green,
  Blue,
}

const myFafColor: Color = Color.Blue;

// Any
let ANY: any;
ANY = 1;
ANY = true;
ANY = 'trim';

// Type Assertion
const email = document.getElementById('email');

if (email) {
  email.addEventListener('change', (e) => {
    const input = e.currentTarget as HTMLInputElement;
    console.log(input.value);
  });
}

