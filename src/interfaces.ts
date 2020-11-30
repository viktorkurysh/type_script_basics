// Interface
interface Profile {
  readonly name: string;
  age?: number;
}

let profile: Profile = {
  name: 'John',
  age: 30,
};

// Index Signature
interface A {
  someProp: string;
  [key: string]: number | string;
}

const intf: A = { someProp: 'some prop' };
intf.x = 1;
intf.y = 2;

// Call Signature
interface Sum {
  (a: number, b: number): number;
  prop1: string;
}

const sum: Sum = (a, b) => a + b; 
sum.prop1 = 'str';

// Extending Ingterfaces
interface Parent {
  x: string;
}

interface Parent2 {
  y: string;
}

interface Parent3 {
  z: string;
}

interface Child extends Parent, Parent2, Parent3 {}

let child: Child = {x: 'str', y: 'y', z: 'z'}
