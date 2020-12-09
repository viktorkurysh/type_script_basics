// Generic function
function genericFunction<T>(x: T): T {
  return x;
}

const genericArrowFunction = <T>(x: T): T => x;

// Generic interfaces
interface GenericInterface<T> {
  (a: T): T;
  someProp: T;
}

interface GenericInterface<T> {
  <U>(a: U): U;
  someProp: T;
}

// Generic classes
class GenericClass<P> {
  constructor(public props: P) { }

  getProps(): P {
    return this.props;
  }
}

interface Expirable {
  expiryDate: Date;
}
interface ChocolateCake extends Expirable { }
interface VanillaCake extends Expirable { }

const chocoCakes: ChocolateCake[] = [
  { expiryDate: new Date() },
];

const vanillaCakes: VanillaCake[] = [
  { expiryDate: new Date() }
];

const getExpiredItems = <Item extends Expirable>(items: Array<Item>) => {
  const currentDate = new Date().getTime();
  return items.filter((item) => item.expiryDate.getDate() < currentDate)
};

const expiredChocoCakes = getExpiredItems<ChocolateCake>(chocoCakes);
const expiredVanillaCakes = getExpiredItems<VanillaCake>(vanillaCakes);

interface ShoppingCart<ItemId, Item> {
  items: Array<Item>;
  addItem(this: ShoppingCart<ItemId, Item>, item: Item): void;
  getItemById(this: ShoppingCart<ItemId, Item>, id: ItemId): Item | undefined;
}

interface Item {
  id: number;
  price: number;
}

const cart: ShoppingCart<number, Item> = {
  items: [],
  addItem(item: Item) {
    this.items.push(item);
  },
  getItemById(id: number) {
    return this.items.find((item) => id === item.id);
  },
} 
