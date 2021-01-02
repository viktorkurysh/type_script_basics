import * as React from 'react';

// simulate exteranal module
interface Cart {
  calculateTotal(): number;
}
// ========================

interface Cart {
  x: number;
}

interface Cart {
  calculateTotal(options: { discountCode: number }): number;
}

let myCart: Cart = {
  x: 1,
  calculateTotal(options?: { discountCode: number }) {
    if (options && options.discountCode) {
      // apply this block
    }
    return 1;
  }
}

// simulate external namespace
namespace MyNamespace {
  export const x: number = 10;
  export interface SomeInterface {
    y: number;
  }
}
// ===========================

namespace MyNamespace {
  export const getX = () => x;
  export interface SomeInterface {
    x: number;
  }
}

MyNamespace.x;
MyNamespace.getX();
const someInterface: MyNamespace.SomeInterface = {
  x: 1,
  y: 2,
}

// ============================
function someFunction() {
  return 10;
}

namespace someFunction {
  export const someProperty = 10;
}

someFunction.someProperty;

// ============================
enum Vegetables {
  Tomato = 'tomatop',
  Onion = 'onion',
}

namespace Vegetables {
  export function makeSalad() {
    return Vegetables.Tomato + Vegetables.Onion;
  }
}

const salad = Vegetables.makeSalad();

// ===========================
class Salad { }

namespace Salad {
  export const availableDressings = ['olive oil', 'youghurt']
}

Salad.availableDressings.includes('olive oil')

// ============================
declare module 'react' {
  interface Component {
    helloWorld(): string;
  }
}

React.Component.prototype.helloWorld = function () {
  return 'Hello World!';
}