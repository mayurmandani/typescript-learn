/* TypeScript Functions - TypeScript has a specific syntax for typing function parameters and return values.*/

// Return Type - The type of the value returned by the function can be explicitly defined.

// the :number here specifies that this function returns a number 
function getTime(): number {
    return new Date().getTime();
}

console.log(getTime());
// Note - If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.

// Void Return Type - The type void can be used to indicate a function doesn't return any value.

function printHello(): void {
    console.log("Hello");
}

console.log(printHello());

// Parameters - Function parameters are typed with a similar syntax as variable declarations.

function multiply(a: number, b: number) {
    // If no parameter type is defined, TypeScript will default to using any, unless additional type information is available as shown in the Default Parameters and Type Alias.
    return a * b;
}

console.log(multiply(2, 3));

// Optional Parameters - By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional

// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?:number) {
    return a + b + (c || 0);
}

console.log(add(3, 5, 8));

// Default Parameters - For parameters with default values, the default value goes after the type annotation:

function pow(value: number, exponent: number = 10) {
    // TypeScript can also infer the type from the default value.
    return value ** exponent;
}

console.log(pow(10));

// Named Parameters - Typing named parameters follows the same pattern as typing normal parameters.

function divide({ divident, divisor }: { divident: number, divisor: number }) {
    return divident / divisor;
}

console.log(divide({divident:10, divisor:10}));

// Rest Parameters - Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.

function addRest(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}

console.log(addRest(5, 10, 10, 20, 30));

// Type Alias - Function types can be specified separately from functions with type aliases. These types are written similarly to arrow functions, read more about arrow functions here.

type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`

const negateFunction: Negate = (value) => value * -1;

console.log(negateFunction(100));