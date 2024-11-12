/* TypeScript Enums - An enum is a special "class" that represents a group of constants (unchangeable variables).

Numeric Enums - Default => By default, enums will initialize the first value to 0 and add 1 to each additional value.

*/
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.North;
console.log(currentDirection);
// Numeric Enums - Initialized => You can set the value of the first numeric enum and have it auto increment from that
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["Norths"] = 1] = "Norths";
    CardinalDirections[CardinalDirections["Easts"] = 2] = "Easts";
    CardinalDirections[CardinalDirections["Souths"] = 3] = "Souths";
    CardinalDirections[CardinalDirections["Wests"] = 4] = "Wests";
})(CardinalDirections || (CardinalDirections = {}));
console.log(CardinalDirections.Norths);
console.log(CardinalDirections.Wests);
// Numeric Enums - Fully Initialized =>  You can assign unique number values for each enum value. Then the values will not incremented automatically.
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
// String Enums -  Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
var direction;
(function (direction) {
    direction["North"] = "North";
    direction["East"] = "East";
    direction["South"] = "South";
    direction["West"] = "West";
})(direction || (direction = {}));
console.log(direction.North);
console.log(direction.West);
// Note : Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.
