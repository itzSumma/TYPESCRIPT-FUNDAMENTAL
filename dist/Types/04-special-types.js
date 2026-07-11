"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Any
let dynamic = 10;
dynamic = "anything"; // কোনো সমস্যা নেই
dynamic = true; // কোনো সমস্যা নেই
//any: Use only as a last resort; disables type safety for quick fixes.
//Unknown
let data = "TypeScript";
// console.log(data.toUpperCase()); // ❌ ভুল: সরাসরি ব্যবহার করা যাবে না
if (typeof data === "string") {
    console.log(data.toUpperCase()); // ✅ সঠিক: টাইপ চেক করার পর ব্যবহার করা যাচ্ছে
}
/*
*unknown: Use for API responses; forces you to check the type before use.
 */
//Void
function sayHi() {
    console.log("Hello!");
    // এখানে কোনো return নেই
}
/**
 * *void: Use for functions; indicates the function performs an action but returns nothing.
 */
//Never
function panic() {
    throw new Error("সিস্টেম ক্র্যাশ করেছে!");
}
let userId = 101;
let userName = "user_01";
const user = { id: 1 };
// user.id = 2; // ❌ ভুল: এটি পরিবর্তন করা যাবে না
/**
 * *readonly: Use to prevent modification; keeps data immutable after initialization.
 */
//Optional
function printUser(name, age) {
    console.log(name, age);
}
printUser("Karim"); // age ছাড়াই কাজ করবে
/**
 * *Optional (?): Use for non-mandatory inputs; makes properties or parameters flexible.
 */
//Type of
const point = { x: 10, y: 20 };
let key = "theme";
/**
 * *Use to restrict strings; ensures you only access valid existing object keys
 */
//Type Assertion
let someValue = "Hello";
let strLength = someValue.length;
/**
 * *Use for type assertion; tells the compiler you know the specific type better.
 */
//Non-null Assertion
const button = document.getElementById("myBtn");
// TypeScript-কে বলা হচ্ছে: চিন্তা করো না, এই বাটনটি নিশ্চিতভাবেই পাবে।
/**
 * *Non-null (!): Use for guaranteed values; skips safety checks when you are 100% sure a value exists.
 */ 
//# sourceMappingURL=04-special-types.js.map