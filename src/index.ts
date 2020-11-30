class Robot {
  // protected name: string;
  _color: string = 'green';
  private static availableColors = ['green', 'yellow'];
  static isColorAvailable(color: string) {
    return Robot.availableColors.includes(color);
  }
  constructor(protected _name: string) {}

  askName() {
    console.log(`My name is ${this._name}`);
  }

  move(distance: number) {
    console.log(`${this._name} moved ${distance} meters`)
  }

  set name(val: string) {
    this._name = val;
  }

  get name() {
    return this._name;
  }

  set color(val: string) {
    if (!Robot.isColorAvailable(val)) throw new Error(`Color ${val} is not available`);
    this._color = val;
  }
}

class FlyingRobot extends Robot {
  private readonly jetpackSize: number;

  constructor(name: string, jetpackSize: number) {
    super(name);
    this.jetpackSize = jetpackSize;
  }

  move(distance: number) {
    console.log(`${this.name} is flying`);
    super.move(distance);
  }
}

const robot = new Robot('Robin');
robot.askName();

const flyingRobot = new FlyingRobot('Den', 12);
flyingRobot.move(30);