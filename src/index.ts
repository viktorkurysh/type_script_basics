function isString(test: any): boolean {
  return typeof test === "string";
}

function example(foo: any) {
  if (isString(foo)) {
    console.log("it is a string " + foo);
    console.log(foo.length); // string function
  }
}
example("hello world");