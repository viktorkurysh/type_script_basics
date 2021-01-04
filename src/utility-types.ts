/** PARTIAL UTILITY TYPE */
interface Starship {
  name: string;
  enableHyperjump: boolean;
}

const updateStarship = (id: number, starship: Partial<Starship>) => { };

updateStarship(1, {
  name: 'Explorer',
});

/** RECORD UTILITY TYPE */
const starships: Record<string, Starship> = {
  Explorer1: {
    name: "Explorer1",
    enableHyperjump: false,
  },
  Explorer2: {
    name: "Explorer2",
    enableHyperjump: true,
  },
}

/** PICK UTILITY TYPE */
type StarshipNameOnly = Pick<Starship, 'name'>;
/** OMIT UTILITY TYPE */
type StarshipWithoutName = Omit<Starship, 'name'>;
/** EXCLUDE UTILITY TYPE */
type AvailableDrinks = 'Coffee' | 'Tea' | 'Orange Juice' | 'Lemonade';
let JohnDrinks: AvailableDrinks;
JohnDrinks = 'Coffee';

type DrinksJaneDoesntLike = 'Coffee' | 'Orange Juice';
let JanesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike>;
JanesDrink = 'Tea'

interface StarshipProperties {
  color?: 'blue' | 'red' | 'green';
}

/** NONNULLABLE and RETURNTYPE UTILITY TYPE */
function paintStarship(id: number, color: NonNullable<StarshipProperties['color']>) {
  return {
    id,
    color,
  }
}

type PaintStarshipReturn = ReturnType<typeof paintStarship>

paintStarship(1, 'blue');

/** CONSTRUCTABLE UTILITY TYPE */
type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance;

function Deletable<BaseClass extends Constructable<{}>>(Base: BaseClass) {
  return class extends Base {
    deleted: boolean = false;
    delete() { }
  }
}

class Car {
  constructor(public name: string) { }
}

class User {
  constructor(public name: string) { }
}

const DeletableCar = Deletable(Car);
const DeletableUser = Deletable(User);

type DeletableUserInstance = InstanceType<typeof DeletableUser>
type DeletableCarInstance = InstanceType<typeof DeletableCar>

class Profile {
  user: DeletableUserInstance | undefined;
  car: DeletableCarInstance | undefined;
}

// const profile = new Profile();
// profile.user = new DeletableUser('John')
// profile.car = new DeletableCar('Ferrari')

// THIS TYPE

interface MyObject {
  sayHello(): void;
}

interface MyObjectThis {
  helloWorld(): string;
}

const myObject: MyObject & ThisType<MyObjectThis> = {
  sayHello() {
    return this.helloWorld();
  }
}

myObject.sayHello = myObject.sayHello.bind({
  helloWorld() {
    return 'Hello World!';
  }
});

console.log(myObject.sayHello())
