class Robot2 {
  #name: string;

  private somePrivateField = 'it is private!!!';

  constructor(name: string) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

class AdvancedRobot extends Robot2 {
  #name: string;


  constructor(name: string) {
    super(name);
    this.#name = `Advanced ${name}`;
  }

  getAdvancedRobotName() {
    return this.#name;
  }
}

const robot2 = new AdvancedRobot('Jack');

console.log('// parent name ', robot2.getName());
console.log('// child name ', robot2.getAdvancedRobotName());