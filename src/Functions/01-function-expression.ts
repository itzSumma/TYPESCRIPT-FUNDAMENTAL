const add = function (a: number, b: number): number {
  return a + b;
};
console.log(add(1, 2));
//Arrow Function Expression
const multiply = (a: number, b: number): number => {
  return a * b;
};
console.log(multiply(1, 2));
//Use a function expression when you need to treat a function as a value to be passed as an argument, assigned conditionally, or to ensure it is only accessible after its definition.