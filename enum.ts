/* TypeScript Enums - An enum is a special "class" that represents a group of constants (unchangeable variables).

Numeric Enums - Default => By default, enums will initialize the first value to 0 and add 1 to each additional value.

*/

enum CardinalDirections {
    North,
    East,
    South,
    West
}

let currentDirection = CardinalDirections.North;

console.log(currentDirection);

// Numeric Enums - Initialized => You can set the value of the first numeric enum and have it auto increment from that

enum CardinalDirections {
    Norths = 1,
    Easts,
    Souths,
    Wests
}

console.log(CardinalDirections.Norths);

console.log(CardinalDirections.Wests);

// Numeric Enums - Fully Initialized =>  You can assign unique number values for each enum value. Then the values will not incremented automatically.

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);

// String Enums -  Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.

enum direction {
    North = 'North',
    East = 'East',
    South = 'South',
    West = 'West'
}

console.log(direction.North);
console.log(direction.West);

// Note : Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.