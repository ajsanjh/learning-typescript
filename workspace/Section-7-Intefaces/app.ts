/* *********************************
 * INTERFACE
 * - Just link java, it serves as a contract.
 */
// Simple example of contract
function greet(person: {name: string}) {   // person type here is basically the contract. i.e. the person has to have name field.
    console.log('Hello ' + person.name)
}
const person1 = {name: 'Max'}  // will work
greet(person1);
const person2 = {firstName: 'Jon'}  // will voilate the contract for greet param
// greet(person2);   // CE!


/* *********************************
 * INTERFACE DECLARATION
 * -- like java but for objects in JS
 */
interface NamedPerson {
    name: string;
}
function greet2(person: NamedPerson) {
    console.log(person.name);
}
const person3: NamedPerson = {name: 'Jason'};
greet2(person3);

/* *********************************
 * INTERFACE PROPERTIES
 * -- can define propeties just like JS objects
 * -- creating objects, properties are not strictly checked, i.e. can add undeclared propertis etc
 * -- passing object littrals are strictly checked
 */
const person4 = {name: 'ajay', age: 33};    // not strictly checked
greet2(person4);
// greet2({name: 'ajay', age: 33});   // CE!:  Object literal may only specify known properties, and 'age' does not exist in type 'NamedPerson'.
// const personXX: NamedPerson = {name: 'ajay', age: 33}; // CE!  This is the same example as above.


// CAN USE OPTIONAL PROPERTY DECLARATION FOR INTERFACES
interface NamedPerson2 {
    name: string;
    age?: number;
}
function greet3(person: NamedPerson2) { console.log(person.name); }
greet3({name: 'ajay3', age: 33});
greet3({name: 'ajay3'});

// UNKNOWN PROPERTY NAME WHILE DECLARATION
interface NamedPerson4 {
    name: string;
    age?: number;
    [propName: string]: any;   // unknow name of the key.  // is optional by default '?'
}
const person5: NamedPerson4 = {
    name: 'ajay4',
    job: 'engineer'             // key assigned for NamedPerson4
};
const person6: NamedPerson4 = {
    name: 'ajay6'
};


/* ****************************************
 * INTERFACE METHODS:
 * -- can define abstract methods.
 */
interface NamedPerson5 {
    name: string,
    greet(age: number): void;
}
// implementation
const person7: NamedPerson5 = {
    name: 'ajay',
    greet(age: number): void {
        console.log('my name is ' + this.name + ' my age is ' + age);
    }
};
person7.greet(33);


/* **************************************
 * INTERFACE AND CLASSES
 *  - 
 */
console.log('-- INTERFACE AND CLASSES--');
interface EmployeeData {
    firstName: string,
    greet(lastName: string): void;
}
class Employee implements EmployeeData {
    firstName: string;  
    age: number;                         // can add additional properties like java.
    greet(lastName: string): void {
        console.log(`hello ${this.firstName} ${lastName} to SAP`);
    }
}
const emp1 = new Employee();
emp1.firstName = 'ajay';
emp1.greet('virdi');


/* *******************************************
 * INTERFACE FOR FUNCTION TYPE
 * -- same as functional interface of java
 * -- NOTE that we don't ahve to name the funtion in interface.
 */
console.log('--INTERFACE FOR FUNCTION TYPE--');
interface DoubleValueFunc {
    (number1: number, number2: number): number; 
}
let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = 
        (number1: number, number2: number) =>
            {
                return number1*number2;
            }


/* *******************************************
 * INTERFACE INHERITANCE
 * -- just like java.
 * -- can overrdie optional properties to be required.
 */
