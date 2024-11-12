/* Type: unknown
unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
Casting is when we use the "as" keyword to say property or variable is of the casted type.
*/
var w = 1;
w = "string";
w = {
    runANonExistentMethod: function () {
        console.log("I think therefore I am");
    }
};
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
