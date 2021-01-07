type SomeType = number;
type MyConditionalType = SomeType extends string ? string : null;

function someFunction<T>(value: T) {
  type A = T extends boolean
    ? 'TYPE A'
    : T extends string
    ? 'TYPE B'
    : T extends number
    ? 'TYPE C'
    : 'TYPE D'
  const someOtherFunction = (someArg: T extends boolean ? 'TYPE A' : 'TYPE B') => {
    const a: 'TYPE A' | 'TYPE B' = someArg
  }
  return someOtherFunction;
}

const result = someFunction(true)

type StringOrNot<T> = T extends string ? string : never;

type AUnion = string | boolean | never;

// type Exclude<T, U> = T excludes U ? neve : U;
type ResultType = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;

// type MyType<T> = (() => T) extends () => string | number ? T : never;
type MyType<T> = [T] extends [string | number] ? T : never;
type MyResult = MyType<string | number | boolean>;

type InferSomething<T> = T extends infer U ? U : any;
type Inffered = InferSomething<'I am a string'>;

type InferSomething2<T> = T extends { a: infer A, b: infer B } ? A & B : any;
type Inffered2 = InferSomething2<{ a: { someAProp: 1 }, b: { soomeBProp: 'B' } }>

type MyFuncReturnValue = ReturnType<() => 'test'>;