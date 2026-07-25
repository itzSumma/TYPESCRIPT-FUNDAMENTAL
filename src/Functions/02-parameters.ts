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
// Optional Parameter Example - required এর পরে বসতে হবে
function sendSMS(message: string, phoneNumber?: string) {
  if (phoneNumber) {
    console.log(`Sending "${message}" to ${phoneNumber}`);
    return "Message sent";
  } else {
    console.log("No phone number provided");
    return "Failed: no phone number";
  }
}

sendSMS("Hello Summa"); // phoneNumber ছাড়া call
sendSMS("Hello Summa", "+8801XXXXXXXXX"); // phoneNumber সহ call

//Default Parameters

//Gotcha: || fallback vs Default Parameter

function calculatePrice1(price: number, tax?: number): number {
  const finalTax = tax || 0.05; // ❌ falsy trap
  return price + (price * finalTax);
}
calculatePrice1(100, 0); // user চেয়েছিল tax=0, কিন্তু পেলো tax=0.05!
//tax?: number মানে tax হতে পারে number | undefined
//tax || 0.05 — || operator শুধু "truthy কিনা" চেক করে, "undefined কিনা" চেক করে না
//0 নিজেই falsy, তাই user ইচ্ছা করে 0 পাঠালেও এইটা override হয়ে 0.05 হয়ে যায়

//সমাধান:

//typescript
function calculatePrice(price: number, tax: number = 0.05): number {
  return price + (price * tax);
}
calculatePrice(100, 0); // ✅ tax = 0 ই থাকে, কারণ default শুধু undefined এ কাজ করে
//Default parameter (= 0.05) শুধু তখনই fallback হয় যখন argument সম্পূর্ণ বাদ দেওয়া হয় (undefined)
//0, "", false এর মতো valid falsy value দিলে সেইটাই থাকে, override হয় না
//Use default parameters to provide a fallback value for an argument, making your function cleaner and more flexible by avoiding extra logic checks.


//Rest Parameters
function sum(...numbers: number[]): number {
 
  return numbers.reduce((total, current) => total + current, 0);
}
console.log(sum(10, 20));        
console.log(sum(10, 20, 30, 40));  
//Use rest parameters to handle an indefinite number of arguments as a single array, making your function flexible enough to accept any number of inputs.