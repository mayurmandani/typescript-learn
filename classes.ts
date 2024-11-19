/* TypeScript adds types and visibility modifiers to JavaScript classes.

The members of a class (properties & methods) are typed using type annotations, similar to variables.

Members: Visibility

Class members also be given special modifiers which affect visibility. There are three main visibility modifiers in TypeScript.
public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes that inherit it.
*/

class Person {

   public constructor(private name: string) {
    this.name = name;
   }

   public getName(): string {
    return this.name;
   }
}

const person = new Person("John");
console.log(person.getName());

// Readonly: Similar to arrays, the readonly keyword can prevent class members from being changed.

class Member{
    private readonly name: string;

    public constructor(name: string) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const member = new Member("Jane");
console.log(member.getName());