function someFn(myArgument: number | string | boolean) {
  let x = null;
  if (typeof myArgument === 'string') {
    myArgument.toUpperCase();
  } else if (typeof myArgument === 'number') {
    myArgument.toFixed(1);
  } else {
    myArgument;
  }
}

interface Dog {
  bark(): void;
  walk(): void;
}

interface Cat {
  meow(): void;
  walk(): void;
}

function isDog(someObj: Cat | Dog): someObj is Dog {
  return (<Dog>someObj).bark !== undefined;
}

function callMyPet(pet: Cat | Dog) {
  pet.walk();
  if (isDog(pet)) {
    (<Dog>pet).bark();
  } else {
    (<Cat>pet).meow();
  }
}

class Foo {
  foo: number | undefined;
  commonProp: string | undefined;
}

class Bar {
  bar: number | undefined;
  commonProp: string | undefined;
}

function fooBarFunction(obj: Foo | Bar) {
  if (obj instanceof Foo) {
    obj.foo;
  } else {
    obj.bar;
  }
}
