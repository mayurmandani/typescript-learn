/* TypeScript Casting - Casting is the process of overriding a type. */
// Casting with as - A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
var t = 'Mayur';
console.log(t.length);
// Casting with <> - Using <> works the same as casting with as.
var r = 'Mayur';
console.log(r.length);
// Force casting - To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
var s = 'hello';
// console.log(((s as unknown) as number).length); // Property 'length' does not exist on type 'number'.
