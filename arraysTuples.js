/* TypeScript Tuples
A tuple is a typed array with a pre-defined length and types for each index.
Tuples are great because they allow each element in the array to be a known type of value.
*/
var ourTuple;
ourTuple = [10, false, "Mayur"];
ourTuple.push('Something new and wrong');
console.log(ourTuple);
// Named Tuples - allow us to provide context for our values at each index.
var graph = [40.2, 45.3];
console.log(graph);
// Since tuples are arrays we can also destructure them.
var graphs = [40.2, 45.3];
var a = graphs[0], b = graphs[1];
console.log(a);
console.log(b);
