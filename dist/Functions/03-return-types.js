"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateArea(radius) {
    return Math.PI * radius * radius;
}
//It turns "hoping your code works" into "guaranteeing your code behaves as expected."
// ১. নিচের ফাংশনটি সম্পূর্ণ করুন (Return type string)
function greet(name) {
    return "Hello, " + name;
}
// ২. void ফাংশন প্র্যাকটিস
function showDetails(id) {
    console.log("User ID is: " + id);
}
// ৩. এরর টেস্ট করুন (নিচের লাইনটি আন-কমেন্ট করলে এরর পাবেন)
function testError() {
    return "This is a string, but I promised a number"; // TypeScript এখানে এরর দিবে!
}
// কল করে দেখুন
console.log(greet("Rahim"));
showDetails(101);
//# sourceMappingURL=03-return-types.js.map