/*  Interfaces - Interfaces are similar to type aliases, except they only apply to object types. */

interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 20,
    width: 10
};

console.log(rectangle);

/* Extending Interfaces - Interfaces can extend each other's definition. 
Extending an interface means you are creating a new interface with the same properties as the original, plus something new.
*/

interface ColoredRectangle extends Rectangle {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};

console.log(coloredRectangle);