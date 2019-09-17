/* ******************************
 * LET AND CONST
 */
// let has a block scope while var has globla scope
// const is to create constants: variable cannot be reassigned once set.
const a1 = 3;
// a1 = 3; // CE!


/* **********************************
 * REST and SPREAD OPERATOR:
 * REST: user: '...arr' as parameter : same as Java varargs except you cannot passs an array anymore.
 * SPREAD: use '...arr' to pass array type variable instaed of values.
 */
console.log('REST & SPREAD OPERATORS');
// e.g. Math.max() only accepts indibidual values
Math.max(1,2,3);
let arr1 = [4,6,3];
// Math.max(arr1); // CE!
Math.max(...arr1); // * works * : '...' will "spread" arr1 to indibitual valules.

// Rest works the other way where param 'arr...' accept individual values as arguments
let myFun1 = function(...args: number[]) {
    // code here.
}
myFun1(1,2,3);
// myFun1(arr1);  // CE!
myFun1(...arr1); // *works*: nice trick: need to spread first



/* **********************************************
 * DESTRUCTURING: Arrays/Objects can be destructured into individual variables
 */
console.log("DESTURUCTURING");
let b1 = [1,2];
const [num1, num2] = b1;
console.log(num1 + ' | ' + num2);

let b2 = {name: 'ajay', age: 33};
const {name: nameb2, age: ageb2} = b2; // syntax {<prop name>: <new varable name> , <prop name....}
console.log(`My name is ${nameb2} and my age is ${ageb2}`);
