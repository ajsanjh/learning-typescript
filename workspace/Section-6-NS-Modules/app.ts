///<reference path="demons.ts"/>

import {funDm1} from "./demomodule1/dmd1";
import {funDm2} from "./demomodule2/dmd2";

/* ***************************************
 * NAMESPACES:
 * Create a scope with custom name. Anything that need to be available outside
 * the namespace: should be marked with export kayword.
 */
const PI = 3.14;
// We can define namespace as:
namespace MyMath {
    export function calculateCircumfrence(diameter: number) {
        return diameter*PI;
    }
    export function calculateArea(radius: number) {   // export will make it available ouside the namespace.
        return PI*radius*radius;
    }
}
// USE: 
console.log(MyMath.calculateArea(2));
// NOTE: const PI is available in global scope.

/* *******************************
 * NAMESPACE WITH MULTIPLE FILSE: 
 * -- see file demons.ts
 * -- there are few ways we can import ouside ts file in our main ts file: app.ts here.
 *  1 > import every compiled js file in script tag if html doc where app.js is imported
 *  2 > use command tsc --outFile <final output file name: app.js> <spcae separated list of file to combine: demons.ts> <input file 2> <input file 3> ...
 *  3 > import files into our main file: app.ts:
 *      >> syntax: '///<reference path="demons.ts"/>'
 *      >> then compile: 'tsc --outFile app.js'     // outFile is required in such cases.
 */
// console.log(MyMath2.calculateArea2(2));  // MyMath2 need to be imported in this file.


/* *****************************************
 * NAMESPACE NESTING:
 * -- namespaces can be nested
 * 
 */
namespace ns1 {
    export namespace ns11 {
        export const fun11 = () => {return 'fun11';}
    }
}
console.log(ns1.ns11.fun11());

/* *********************************************
 * limmitation of NAMESPACES:
 *  -- order import is very important and can become cumbersome
 *  -- bundling in bigger projects an be hard
 *  -- better bundling is available with ES6 modules.
 */

/* ********************************************
 * ES6 MODULES
 *  -- import : import {funDm1} from "./demomodule1/dmd1";
 *  -- import * as MyFunction from "./demomodule1/dmd1";
 *  -- import {funDm1 as MyFunction} from "./demomodule1/dmd1";
 *  -- import MyFun from "./demomodule1/dmd1";   ?? if and only if the module is exporting only function marked with 'default' keywork. And there can only be one default
 */ 
funDm1();





