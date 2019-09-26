/* *********************************
 * SIMPLE GENERICS: GENERIG FUNCTION
 * -- using generics in method params.
 */
// No generics:
function echo1(data: any) {
    return data;
}
console.log(echo1(1).length);  // no CE because of lack of generics; returned data type (number) does not have length property but TS is treating it as any.
console.log(echo1('ajay').length);  // string does have length property.

// with generics:
function echo2<T>(data: T): T { // T is set to the type of the argument passed; if not explicity set. by echo2<type>(arguments)...
    return data;
}
//console.log(echo2(1).length); // CE! : argument passed is type number an is set by 'T' so TS know the returned value is type number
console.log(echo2('ajay').length);  // works and is infered by default
console.log(echo2<string>('ajay').length);   // explicit type referenced. 


/* **********************************************
 *  BUILD IN GENERICS
 * -- Arrays.  declare type by assigning 'type[]'  or Array<type>
 */
console.log('--BUILD IN GENERICS--');
let testResults: Array<number> = [];
let testArr: number[] = []; // same as above
testResults.push(1);
// testResults.push('Test');  //CE !


/* ************************************************
 * GENERIC TYPES
 */
console.log('--GENERIC TYPES--');
