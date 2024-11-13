/* TypeScript Casting - Casting is the process of overriding a type. */

// Casting with as - A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.

let t: unknown = 'Mayur';

console.log((t as string).length);

// Casting with <> - Using <> works the same as casting with as.

let r: unknown = 'Mayur';

console.log((<string>r).length);

// Force casting - To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.

let s = 'hello';

// console.log(((s as unknown) as number).length); // Property 'length' does not exist on type 'number'.