/* 
TypeScript Object Types
*/

const car: { type: string, model: string, year: number } = {
    type: "Toyoto",
    model: "Corolla",
    year: 2018
}

// Type Inference - TypeScript can infer the types of properties based on their values.

car.type = "Ford";
//  car.model = 2; Error: Type 'number' is not assignable to type 'string'.

// Optional Properties - Optional properties are properties that don't have to be defined in the object definition.

const motor: {type: string, mileage?: number} = {
    type: "SUV"
};

motor.mileage = 1000;

// Index Signatures - Index signatures can be used for objects without a defined list of properties.

const nameAgeMap: { [index: string ]: number } = {};

nameAgeMap.Mayur = 25;
console.log(nameAgeMap);