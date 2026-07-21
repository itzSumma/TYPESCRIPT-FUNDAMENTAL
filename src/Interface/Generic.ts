//structure
function identity<T>(value: T): T {
  return value;
}//<T>=Type parameter


//Task-1
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber= getFirstElement([10, 20, 30]);
const firstString= getFirstElement(["apple", "ball", "cat"]);    

//task-2
function createPair<T, U>(first:T, second:U):[T,U]{
  return [first, second];
}

const firstAge = createPair("Sharmin", 23);
const firstSalary = createPair("Sharmin", 30000);
/*
 *Generic in TypeScript is like a placeholder for data types (represented by <T>).
 *Instead of locking a function, interface, or class to a specific type (like string or number) or losing safety with any, Generics allow you to write reusable, flexible, and type-safe code. It dynamically captures the data type you pass in and ensures the output maintains that exact same type. 
 */

 //Task-3`
 function wrapInArray<T>(value:T):T[]{
    return [value];
 }
 const numberArray = wrapInArray(10);
 const stringArray = wrapInArray("Hello");