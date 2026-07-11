"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Required Parameters
function introduce(name, age) {
    return `${name} is ${age} years old.`;
}
introduce("John", 22);
//Optional Parameters
function greet(name, title) {
    if (title)
        return `Hello ${title} ${name}`;
    return `Hello ${name}`;
}
console.log(greet("Alice"));
console.log(greet("Alice", "Dr."));
//Default Parameters
function calculatePrice1(price, tax) {
    const finalTax = tax || 0.05;
    return price + (price * finalTax);
}
console.log(calculatePrice1(100));
console.log(calculatePrice1(100, 0.1));
function calculatePrice(price, tax = 0.05) {
    return price + (price * tax);
}
console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.1));
//Use default parameters to provide a fallback value for an argument, making your function cleaner and more flexible by avoiding extra logic checks.
//Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, current) => total + current, 0);
}
console.log(sum(10, 20));
console.log(sum(10, 20, 30, 40));
//Use rest parameters to handle an indefinite number of arguments as a single array, making your function flexible enough to accept any number of inputs.
//# sourceMappingURL=02-parameters.js.map