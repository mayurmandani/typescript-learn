// TypeScript has special types that may not refer to any specific type of data.

// Type: any - any is a type that disables type checking and effectively allows all types to be used.

let username: any = "true"
username = "string";
Math.round(username);

console.log(username);

/* any can be a useful way to get past errors since it disables type checking, 
but TypeScript will not be able provide type safety, and tools which rely on type data, such as auto completion, will not work. */