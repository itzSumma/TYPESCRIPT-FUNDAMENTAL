//Required Parameters
function introduce(name: string, age: number): string {
  return `${name} is ${age} years old.`;
}
introduce("John", 22); 
//Optional Parameters
function greet(name: string, title?: string): string {
  if (title) return `Hello ${title} ${name}`;
  return `Hello ${name}`;
}
console.log(greet("Alice"));        
console.log(greet("Alice", "Dr.")); 

//Default Parameters
function calculatePrice1(price: number, tax?: number): number {
  const finalTax = tax || 0.05; 
  return price + (price * finalTax);
}

console.log(calculatePrice1(100));
console.log(calculatePrice1(100, 0.1));
function calculatePrice(price: number, tax: number = 0.05): number {
  return price + (price * tax);
}

console.log(calculatePrice(100));     
console.log(calculatePrice(100, 0.1)); 
//Use default parameters to provide a fallback value for an argument, making your function cleaner and more flexible by avoiding extra logic checks.


//Rest Parameters
function sum(...numbers: number[]): number {
 
  return numbers.reduce((total, current) => total + current, 0);
}
console.log(sum(10, 20));        
console.log(sum(10, 20, 30, 40));  
//Use rest parameters to handle an indefinite number of arguments as a single array, making your function flexible enough to accept any number of inputs.