/* TypeScript Tuples 
A tuple is a typed array with a pre-defined length and types for each index.
Tuples are great because they allow each element in the array to be a known type of value.
*/

let ourTuple: [number, boolean, string];

ourTuple = [10, false, "Mayur"];

ourTuple.push('Something new and wrong');
console.log(ourTuple);

// Named Tuples - allow us to provide context for our values at each index.
const graph: [x: number, y: number] = [40.2, 45.3];
console.log(graph);

// Since tuples are arrays we can also destructure them.
const graphs: [number, number] = [40.2, 45.3];
const [a, b] = graphs;

console.log(a);
console.log(b);


