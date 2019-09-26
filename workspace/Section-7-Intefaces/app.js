"use strict";
/* *********************************
 * INTERFACE
 * - Just link java, it serves as a contract.
 */
// Simple example of contract
function greet(person) {
    console.log('Hello ' + person.name);
}
var person1 = { name: 'Max' }; // will work
greet(person1);
var person2 = { firstName: 'Jon' }; // will voilate the contract for greet param
function greet2(person) {
    console.log(person.name);
}
var person3 = { name: 'Jason' };
greet2(person3);
/* *********************************
 * INTERFACE PROPERTIES
 * -- can define propeties just like JS objects
 * -- creating objects, properties are not strictly checked, i.e. can add undeclared propertis etc
 * -- passing object littrals are strictly checked
 */
var person4 = { name: 'ajay', age: 33 }; // not strictly checked
greet2(person4);
function greet3(person) { console.log(person.name); }
greet3({ name: 'ajay3', age: 33 });
greet3({ name: 'ajay3' });
var person5 = {
    name: 'ajay4',
    job: 'engineer' // key assigned for NamedPerson4
};
var person6 = {
    name: 'ajay6'
};
// implementation
var person7 = {
    name: 'ajay',
    greet: function (age) {
        console.log('my name is ' + this.name + ' my age is ' + age);
    }
};
person7.greet(33);
/* **************************************
 * INTERFACE AND CLASSES
 *
 */
console.log('-- INTERFACE AND CLASSES--');
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.greet = function (lastName) {
        console.log("hello " + this.firstName + " " + lastName + " to SAP");
    };
    return Employee;
}());
var emp1 = new Employee();
emp1.firstName = 'ajay';
emp1.greet('virdi');
