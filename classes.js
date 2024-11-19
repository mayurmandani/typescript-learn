/* TypeScript adds types and visibility modifiers to JavaScript classes.

The members of a class (properties & methods) are typed using type annotations, similar to variables.

Members: Visibility

Class members also be given special modifiers which affect visibility. There are three main visibility modifiers in TypeScript.
public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes that inherit it.
*/
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("John");
console.log(person.getName());
// Readonly: Similar to arrays, the readonly keyword can prevent class members from being changed.
var Member = /** @class */ (function () {
    function Member(name) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }
    Member.prototype.getName = function () {
        return this.name;
    };
    return Member;
}());
var member = new Member("Jane");
console.log(member.getName());
