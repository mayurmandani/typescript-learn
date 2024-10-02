// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = 'brown';
let favouriteQuote: string = `I'm not old, I'm only ${age}`;

// Array
let pets: string[] = ['cat', 'dog', 'pig'];
let pets2: Array<string> = ['lion', 'dragon', 'lizard'];

// Object
let wizard: object = {
    a : 'John'
}

// null and undefined
let meh: undefined = undefined;
let noo: null = null

// Tuple
let basket: [string, number];
basket = ['basketball', 5]

// Enum // you can define your data structure
enum Size { Small = 1, Medium = 2, Large = 3 }
let sizeName: number = Size.Small;

// Any - !!!!!!! BE CAREFUL
let whatever: any = 'Hello!!!'
whatever = basket

// void
let sing = (): void => {
    console.log('Mayur')
} 

// never 
let error = (): never => {
    throw Error('oops!')    
}

// interface
interface RobotArmy {
    count: number,
    type: string,
    magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('FIGHT!')
}

let fightRobotArmy2 = (robots: {count: number, type: string, magic: string }) => {
    console.log('FIGHT!')
}

// Type Assertion
interface CatArmy {
    count: number,
    type: string,
    magic: string
}

let dog = {} as CatArmy
dog.count

// Function
let fightRobotArmy3 = (robots: RobotArmy): void => {
    console.log('FIGHT!')
}

let fightRobotArmy4 = (robots: {count: number, type: string, magic: string }): number => {
    console.log('FIGHT!')
    return 5
}

// Class
class Animal {
    public sing: string = "Hoooooo"
    constructor(sound: string) {
        this.sing = sound;
    }

    greet(): string {
        return `Hello, ${this.sing}`
    }
}

let lion = new Animal("EEE")
lion.sing

// Union 
let confused: string | number | boolean = true

let x: number = 4