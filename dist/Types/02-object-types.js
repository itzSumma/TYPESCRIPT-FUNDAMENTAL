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
// Array types
const scores = [85, 90, 95];
// const scores: Array<number> = [85, 90, 95];
console.log(scores);
/*
 * Tuple Types
 */
const person = ["Bob", 25];
console.log(person);
const myDept = {
    name: "Engineering",
    members: ["Sharmin", "Bob", "Alice"],
    location: [24.3636, 88.6241]
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
//# sourceMappingURL=02-object-types.js.map