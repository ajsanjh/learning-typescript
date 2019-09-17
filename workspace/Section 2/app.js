"use strict";
console.log("It works!");
// types:
// string
var myName = 'Ajay';
// myName = 23;  // CE! cannot assign number to string type
// number
var age1 = 33; // number
var age2 = 24.5; // number
// boolean
var check1 = false;
// check1 = 1; // CE! although 1 means true
// array *special*
var arr1 = ['cooking', 'supports']; // infered as type string
// NOTE: 
// arr1[2] = 19; // CE! since arr1 is of type string
// arr1 = [100, 101];  // CE! arr1 is of type string and cannot be reassigned. like java
// HOWEVER:
var arr2 = ['cooking', 'supports'];
arr2[2] = 3; // **WORKS** since arr2 is explicitly assigned type 'any'.
// tuples, just a key value pari; not a collection
var address1 = ['whatever', 3];
// enums  **special** unlike java.
var Color;
(function (Color) {
    Color[Color["GRAY"] = 0] = "GRAY";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
// hence
var myColor1 = Color.GREEN;
console.log(myColor1); // prints 1 for the ordinance; unline java.
// enum can be assigned value:
var Test;
(function (Test) {
    Test[Test["CASE1"] = 0] = "CASE1";
    Test[Test["CASE2"] = 202] = "CASE2";
    Test[Test["CASE3"] = 203] = "CASE3";
    Test[Test["CASE4"] = 3] = "CASE4"; // assigned value of 3
})(Test || (Test = {}));
// Any type:
var n1;
n1 = 'ajay';
n1 = 2; // no CE!
var name2; // same as line below
var name3; // same as line above
// CHECK TYPE:
console.log(typeof arr1[0]); // is string;
/* **************************************
 * FUNCTIONS:
 */
// RETURN TYPES
function simple1() {
    return 'ajay';
}
function simple2() {
    // some statement
}
function simple3(num) {
    return 10 * num;
}
// FUNCTIONS AS TYPES
// in js function refrence can be assigned to anything else at anytime
var fun1; // ** function type is: '(<order and type of arguments>) => <return type>  **
fun1 = simple3;
// fun1 = simple1;  // CE! simple1 does not match the type of fun1.
/* **********************************
 * OBJECTS:
 */
// OBJECT TYPE:
var user1; // simple enough. Note, name of the property matters along with type
user1 = { name: 'ajay', age: 33 };
// user1 = {name: 'ajay', age: false} // CE!
// user1 = {name: 'ajay', employedSince: 2014} // CE!
/* ***********************************
 * BIG EXAMPLE:
 */
var complex = {
    data: [1, 2, 3, 4, 5],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [1, 2, 3, 4, 5],
    output: function (all) {
        return this.data;
    }
};
// UNION TYPES: letting a variable work with myltiple type and not all (i.e. any)
var myMess1; // can save number 'OR' a string. And nothing alse. Hence different from 'any' type
/* *****************************************
 * CHECK TYPES:  use typeof with '=='
 */
var myText1 = 'ajay';
if (typeof myText1 == 'number')
    console.log('value is a number');
