/* TypeScript Arrays 
*/

const names: string[] = [];
names.push("Mayur", "Ravi", "Rohan");

console.log(names);

const address: readonly string[] = ["Vadodara"];
// address.push("Surat"); The readonly keyword can prevent arrays from being changed.

console.log(address);

// Type Inference - TypeScript can infer the type of an array if it has values.

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4);

console.log(numbers);

let head: number = numbers[2]; 

console.log(head);