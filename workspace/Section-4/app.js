"use strict";
/* ******************************
 * LET AND CONST
 */
// let has a block scope while var has globla scope
// const is to create constants: variable cannot be reassigned once set.
var a1 = 3;
// a1 = 3; // CE!
/* **********************************
 * REST and SPREAD OPERATOR:
 * REST: user: '...arr' as parameter : same as Java varargs except you cannot passs an array anymore.
 * SPREAD: use '...arr' to pass array type variable instaed of values.
 */
console.log('REST & SPREAD OPERATORS');
// e.g. Math.max() only accepts indibidual values
Math.max(1, 2, 3);
var arr1 = [4, 6, 3];
// Math.max(arr1); // CE!
Math.max.apply(Math, arr1); // * works * : '...' will "spread" arr1 to indibitual valules.
// Rest works the other way where param 'arr...' accept individual values as arguments
var myFun1 = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // code here.
};
myFun1(1, 2, 3);
// myFun1(arr1);  // CE!
myFun1.apply(void 0, arr1); // *works*: nice trick: need to spread first
/* **********************************************
 * DESTRUCTURING: Arrays/Objects can be destructured into individual variables
 */
console.log("DESTURUCTURING");
var b1 = [1, 2];
var num1 = b1[0], num2 = b1[1];
console.log(num1 + ' | ' + num2);
var b2 = { name: 'ajay', age: 33 };
var nameb2 = b2.name, ageb2 = b2.age; // syntax {<prop name>: <new varable name> , <prop name....}
console.log("My name is " + nameb2 + " and my age is " + ageb2);
