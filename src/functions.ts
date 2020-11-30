// Functions (optional and default params)
function sum2(a: number, b: number = 0): number {
  return a + b;
}

sum2(1);

type MyFunc = (a: number, b: number) => number;
const sum3: MyFunc = (a, b) => a + b;

// Unknown number of arguments
function sumEverything(...numbers: number[]): number {
  return numbers.reduce((result, num) => result + num, 0);
}

// Overload
function calcArea(width: number, height: number): number;
function calcArea(length: number): number;
function calcArea(...args: number[]): number {
  if (args.length === 2) {
    return args[0] * args[1];
  }
  return args[0] ^ 2; 
}
