// Object Types

const employee: { name: string; age: number; isDeveloper: boolean } = {
  name: "Sharmin",
  age: 23,
  isDeveloper: true,
};
console.log(employee.name);
console.log(employee.age);
console.log(employee.isDeveloper);

//A way to store multiple related pieces of data together as a collection of key-value pairs.

/*
 *Array types
 */
const scores: number[] = [85, 90, 95];
// const scores: Array<number> = [85, 90, 95];
console.log(scores);
//A list of items of the same data type that can be easily accessed and modified.
/*
 * Tuple Types
 */
const person: [string, number] = ["Bob", 25];
console.log(person);

//A special array with a fixed length where the data type for each specific position is predefined.

// One interface structure

interface Department {
  name: string;
  members: string[];
  location: [number, number];
}

const myDept: Department = {
  name: "Engineering",
  members: ["Sharmin", "Bob", "Alice"],
  location: [24.3636, 88.6241],
};

console.log(myDept.members[0]); // Sharmin
console.log(myDept.location[1]); // 88.6241

/*
 * Enum Types
 */
enum Role {
  Admin,
  User,
}
const currentRole: Role = Role.Admin;
console.log(currentRole);

//An Enum is a collection of labels that gives clear names to specific values.
/*
 *Class Types
 */
class Car {
  constructor(
    public brand: string,
    public year: number,
  ) {}

  displayInfo(): void {
    console.log(`Car: ${this.brand}, Year: ${this.year}`);
  }
}

const myCar = new Car("Toyota", 2024);
myCar.displayInfo();
const anotherCar = new Car("Honda", 2022);
anotherCar.displayInfo();

//A class is like a blueprint or a template that helps you create multiple objects quickly and easily.

/*
 * FUnction Types
 */
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("John"));
console.log(greet("Alice"));
//A function is a reusable code-machine that takes an input and returns a specific output.

/*
 *Interface Types
 */
interface Product {
  id: number;
  title: string;
  price?: number;
}
const laptop: Product = {
  id: 1,
  title: "MacBook Air",
};

const phone: Product = {
  id: 2,
  title: "iPhone 15",
  price: 999,
};

console.log(laptop);
console.log(phone);
//An interface is a enforced template that makes sure your objects always have the right properties and correct data types.
/*
 *   npx tsc --build --clean && npx tsc {for every time output}
 */
