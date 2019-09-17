console.log("It works!");

// types:

// string
let myName = 'Ajay';
// myName = 23;  // CE! cannot assign number to string type

// number
let age1 = 33;  // number
let age2 = 24.5; // number

// boolean
let check1 = false;
// check1 = 1; // CE! although 1 means true

// array *special*
let arr1 = ['cooking', 'supports'];  // infered as type string
// NOTE: 
// arr1[2] = 19; // CE! since arr1 is of type string
// arr1 = [100, 101];  // CE! arr1 is of type string and cannot be reassigned. like java
// HOWEVER:
let arr2: any[] = ['cooking', 'supports'];
arr2[2] = 3; // **WORKS** since arr2 is explicitly assigned type 'any'.

// tuples, just a key value pari; not a collection
let address1: [string, number] = ['whatever', 3];

// enums  **special** unlike java.
enum Color {
    GRAY, GREEN, BLUE
}
// hence
let myColor1: Color = Color.GREEN;
console.log(myColor1); // prints 1 for the ordinance; unline java.
// enum can be assigned value:
enum Test {
    CASE1,          // will have default value 1
    CASE2 = 202,    // assigned value 202
    CASE3,          // continues from last value and will have value 203
    CASE4 = 3       // assigned value of 3
}

// Any type:
let n1: any;
n1 = 'ajay';
n1 = 2;  // no CE!

let name2;     // same as line below
let name3: any; // same as line above


// CHECK TYPE:
console.log(typeof arr1[0]);  // is string;



/* **************************************
 * FUNCTIONS:
 */
// RETURN TYPES
function simple1(): string {   // expected return type is string
    return 'ajay'
}
function simple2() {        // return is void since nothing is returned
    // some statement
}
function simple3(num: number) {        // return type is infered as number here.
    return 10*num;
}


// FUNCTIONS AS TYPES
// in js function refrence can be assigned to anything else at anytime
let fun1: (val1: number) => number;   // ** function type is: '(<order and type of arguments>) => <return type>  **
fun1 = simple3;
// fun1 = simple1;  // CE! simple1 does not match the type of fun1.


/* **********************************
 * OBJECTS:
 */
// OBJECT TYPE:
let user1: {name: string, age: number};   // simple enough. Note, name of the property matters along with type
user1 = {name: 'ajay', age: 33};
// user1 = {name: 'ajay', age: false} // CE!
// user1 = {name: 'ajay', employedSince: 2014} // CE!


/* ***********************************
 * BIG EXAMPLE:
 */
let complex: {data: number[], output: (all: boolean) => number[]} =
    {
        data: [1,2,3,4,5],
        output: function (all: boolean) {
            return this.data;
        }
    };



/* *************************************
 * CUSTOM TYPES:
 */
// USING TYPE ALIAS
type ComplexType = {data: number[], output: (all: boolean) => number[]};
let complex2: ComplexType = {
    data: [1,2,3,4,5],
    output: function (all: boolean) {
        return this.data;
    }
}

// UNION TYPES: letting a variable work with myltiple type and not all (i.e. any)
let myMess1: number | string;   // can save number 'OR' a string. And nothing alse. Hence different from 'any' type



/* *****************************************
 * CHECK TYPES:  use typeof with '=='
 */
let myText1 = 'ajay';
if(typeof myText1 == 'number')
    console.log('value is a number');



/* *****************************************
 * NEVER TYPE: not the same as void
 */
// when expression cannot result into anything:
function neverReturns1(): never {
    throw new Error('An error!');
}


/* ********************************
 * NULLABLE TYPES
 */
// can't always assign null to any variable
// ------1
let varrr1;
varrr1 = null;   // since varrr1 is any, it can be null
// ------2
let varr2 = null; // *****  IMPORTANT *****
varr2 = 'ajay'; // works because varr2 is of type any
// ------3
let myText2 = 'ajay';
// myText2 = null;   // CE! this happens because strict check is set to true in tsconfig.json cannot assign null to type string.
// ------4
// however with strict check on we can enable nulls on per proberty bases
let myText3: string | null = 'ajay';
myText3 = null;  // ** works ** 