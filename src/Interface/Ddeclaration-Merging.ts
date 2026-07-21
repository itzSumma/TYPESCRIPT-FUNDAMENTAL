interface Lawyer {
  name: string;
}
interface Lawyer {
  age: number;
}
const l: Lawyer = { name: "Rahim", age: 30 };

//Task

interface AIConfig { model: string; }

interface AIConfig {
  name?: string,
  tempreture?:number,
  max_tokens?:number,
  top_p?:number

}
const config: AIConfig = { model: "text-davinci-003", name: "OpenAI" };

/*
 *Declaration Merging — Quick Notes

*type = assignment → one-time only → duplicate name = error

*interface = declaration → can be declared multiple times → same name = merges (if no conflict)

*Merging use case: extend a library's interface (e.g. Express Request, third-party AIConfig) without editing its source

*New properties added via merging → always make them optional (?)

*Reason: required property = breaks every existing usage that doesn't have it → merging should extend safely, not break existing code 
 */