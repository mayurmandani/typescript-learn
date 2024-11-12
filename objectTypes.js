/*
TypeScript Object Types
*/
var car = {
    type: "Toyoto",
    model: "Corolla",
    year: 2018
};
// Type Inference - TypeScript can infer the types of properties based on their values.
car.type = "Ford";
//  car.model = 2; Error: Type 'number' is not assignable to type 'string'.
// Optional Properties - Optional properties are properties that don't have to be defined in the object definition.
var motor = {
    type: "SUV"
};
motor.mileage = 1000;
// Index Signatures - Index signatures can be used for objects without a defined list of properties.
var nameAgeMap = {};
nameAgeMap.Mayur = 25;
console.log(nameAgeMap);
