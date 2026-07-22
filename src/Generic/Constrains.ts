 // Structure: <T extends [condition]>
function functionName<T extends condition>(parameter: T) {
  // Your code here
}

//Task-1
function printUserId<T extends {id:number}>(user:T):void{
    console.log(`User ID is ${user.id}`);
}

printUserId({id:101, name:"Summa"});
printUserId ({id:202,emaila:"summa@.com"});


//Task-2
 function checkProduct<T extends {price:number}>(product:T):void{
    console.log(`Product price is ${product.price}`);
 }
checkProduct({id:101,title:"Mechanical Keyboard",price:3500});
checkProduct({ title: "Book", price: 25, inStock: true });

//Task-3
function getPropertyOrFallback<T, K extends keyof T> (obj:T,key:K):T[K]| string {
    if(obj[key] !== undefined){
        return obj[key];
    }else{
        return "Property not found";
    }
}
const product = { id: 1, name: "Smartphone", price: 500 };
const result1 = getPropertyOrFallback(product, "name"); 
const result2 = getPropertyOrFallback(product, "price")
/*
 *function getPropertyOrFallback<T, K extends keyof T>(obj: T, key: K): T[K] | string 
 */

 //Task-4
  function mergeObject <T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }
  const person = { name: "Summa", age: 22 };
const job = { role: "Developer", company: "TechCorp" };
const combined = mergeObject(person, job);
console.log(combined);

interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
}


function updateProduct(id: number, updatedData: Partial<Product>) {
  console.log(`Updating product ${id} with:`, updatedData);
}
