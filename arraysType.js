/* TypeScript Arrays
*/
var names = [];
names.push("Mayur", "Ravi", "Rohan");
console.log(names);
var address = ["Vadodara"];
// address.push("Surat"); The readonly keyword can prevent arrays from being changed.
console.log(address);
// Type Inference - TypeScript can infer the type of an array if it has values.
var numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4);
console.log(numbers);
var head = numbers[2];
console.log(head);
