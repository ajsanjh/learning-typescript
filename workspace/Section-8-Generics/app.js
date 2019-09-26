"use strict";
/* *********************************
 * SIMPLE GENERICS
 */
// No generics:
function echo1(data) {
    return data;
}
console.log(echo1(1).length); // no CE because of lack of generics; returned data type (number) does not have length property
console.log(echo1('ajay').length); // string does have length property.
// with generics:
function echo2(data) {
    return data;
}
//console.log(echo2(1).length); // CE!
console.log(echo2('ajay').length);
