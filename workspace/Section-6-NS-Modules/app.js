"use strict";
///<reference path="demons.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
var dmd1_1 = require("./demomodule1/dmd1");
/* ***************************************
 * NAMESPACES:
 * Create a scope with custom name. Anything that need to be available outside
 * the namespace: should be marked with export kayword.
 */
var PI = 3.14;
// We can define namespace as:
var MyMath;
(function (MyMath) {
    function calculateCircumfrence(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumfrence = calculateCircumfrence;
    function calculateArea(radius) {
        return PI * radius * radius;
    }
    MyMath.calculateArea = calculateArea;
})(MyMath || (MyMath = {}));
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
var ns1;
(function (ns1) {
    var ns11;
    (function (ns11) {
        ns11.fun11 = function () { return 'fun11'; };
    })(ns11 = ns1.ns11 || (ns1.ns11 = {}));
})(ns1 || (ns1 = {}));
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
 */
dmd1_1.funDm1();
