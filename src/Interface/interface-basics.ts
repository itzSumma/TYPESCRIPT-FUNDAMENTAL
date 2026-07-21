// JS
const user = {
  name: "Summa",
  age: 22
};
/**
 * *A plain JavaScript object with no type enforcement — TypeScript won't check its shape at all
 */
//TS
interface User{
    name:string,
    age:number
}

/*
 * Defines a contract named User requiring exactly two required properties: name (string) and age (number)
 */
//Optional property + valid usage
interface User{
    name:string,
    age:number,
    nickname?:string

}

const persone:User={
    name:"Summa",
    age:22
   
}

/*
 * Summary: Redeclares User adding an optional nickname field; then creates an object persone typed as User without providing nickname — valid, since optional fields can be omitted.
 */
//Readonly interface
interface stranger{
    name:string,
    age:number,
    readonly id:string;
}

const newUser:stranger={
    name:"Summa",
    age:22,
    id:"1"
}
/*
 *Summary: Defines stranger with a readonly id — meaning once newUser is created with id: "1", that id can never be reassigned afterward. 
 */

newUser.id="2";
user.name="tisha";
/*
 *Summary: Attempts to reassign id on newUser, and reassign name on the plain JS user. 
 */


 interface Config {
  readonly apiKey: string;
}

let settings: Config = { apiKey: "abc123" };

settings = { apiKey: "xyz789" };
settings.apiKey = "new-key";  
/*
 * Readonly — Quick Notes
*readonly propertyName: type → property can't be changed after it's initially set
*const = locks variable reassignment (reference lock)
*readonly = locks a specific property's value inside the object (value lock)
*Two independent layers — one doesn't substitute for the other */     



 