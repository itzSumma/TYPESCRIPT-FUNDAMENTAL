"use strict";
// Object Types
Object.defineProperty(exports, "__esModule", { value: true });
const employee = {
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
const scores = [85, 90, 95];
// const scores: Array<number> = [85, 90, 95];
console.log(scores);
//A list of items of the same data type that can be easily accessed and modified.
/*
 * Tuple Types
 */
const person = ["Bob", 25];
console.log(person);
const myDept = {
    name: "Engineering",
    members: ["Sharmin", "Bob", "Alice"],
    location: [24.3636, 88.6241],
};
console.log(myDept.members[0]); // Sharmin
console.log(myDept.location[1]); // 88.6241
/*
 * Enum Types
 */
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
})(Role || (Role = {}));
const currentRole = Role.Admin;
console.log(currentRole);
//An Enum is a collection of labels that gives clear names to specific values.
/*
 *Class Types
 */
class Car {
    brand;
    year;
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    displayInfo() {
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
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("John"));
console.log(greet("Alice"));
const laptop = {
    id: 1,
    title: "MacBook Air",
};
const phone = {
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
//# sourceMappingURL=02-object-types.js.map