interface PhoneBook {
  [name: string]: string; //[keyName: string]: valueType
}

const phonebook: PhoneBook = {
  "Rahim": "01711111111",
  "Karim": "01822222222",
  "Salma": "01933333333",
  "Jamal": "01944444444", // ✅ নতুন key add করাতেও কোনো error নেই
};

interface DevArchify {
  [featureName: string]: boolean;
}

const features: DevArchify = {
  "auth":true,
"database":true,
"payment":false,
"storage":true,
"api":true,
"aiIntrigation":true,}

/*
 *Index Signature — Quick Notes
*[keyName: string]: valueType → define an object's shape without knowing the exact property names in advance
*Every key must follow the same rule (both key type and value type)
*Real use case: dynamic data — feature flags, phonebook, config maps, MongoDB documents with dynamic fields 
 */

//Call signature
function hourlyFee(hours: number, rate: number): number {
  return hours * rate;
}
interface FeeCalculator {
  (hours: number, rate: number): number;
}

const hourlyFee2: FeeCalculator = (hours, rate) => hours * rate;//Call signature (parameters): returnType

/*
 *Function Type Interface — Quick Notes
*Syntax: (param: type, param2: type): returnType — written directly as a call signature, no property name needed
*Locks down a function's shape (parameter types + return type)
*Multiple functions with the same shape (hourly fee, flat fee, discounted fee) are all forced to follow one common interface
*Remember the bracket type: [ ] = index signature (object), ( ) = call signature (function)

 */