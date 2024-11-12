/* Type: never 
never effectively throws an error whenever it is defined.
never is rarely used, especially by itself, its primary use is in advanced generics.
*/

function infiniteLoop(): never {
    while (true) {
    }
}
