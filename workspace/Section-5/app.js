"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* **********************************
 * CLASSES
 */
// E.G.
var Person_1 = /** @class */ (function () {
    function Person_1(name) {
        this.name = name;
    }
    return Person_1;
}());
// ** OR *** Shortcut of above:
var Person_11 = /** @class */ (function () {
    function Person_11(name) {
        this.name = name;
    } // name will become a public instance field. can be marked private
    return Person_11;
}());
// ACCESS MODIFIRES
var Employee = /** @class */ (function () {
    function Employee() {
        this.name = 'ajay'; // public 
        this.id = 1; // public
        this.salary = 123213; // private
        this.self = this; // protected.
    }
    return Employee;
}());
/* ***************************
 * FUNCTIONS IN CLASSES
 * -- Function have same access modifiers as well.
 */
var Person_2 = /** @class */ (function () {
    function Person_2() {
    }
    Person_2.prototype.setName = function (name) {
        this.name = name;
    };
    Person_2.prototype.getName = function () {
        return this.name;
    };
    return Person_2;
}());
var p2 = new Person_2();
p2.setName('p2');
console.log(p2.getName());
/* *********************************
 * INHERITANCE:
 * --
 */
console.log("--INHERITANCE--");
// E.G.
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.quacks = function () {
    };
    return Duck;
}());
var WildDuck = /** @class */ (function (_super) {
    __extends(WildDuck, _super);
    function WildDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WildDuck.prototype.quacks = function () {
        console.log('Loud Quack');
    };
    return WildDuck;
}(Duck));
var CityDuck = /** @class */ (function (_super) {
    __extends(CityDuck, _super);
    function CityDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CityDuck.prototype.quacks = function () {
        console.log('Quiet Quack');
    };
    return CityDuck;
}(Duck));
var myDuck1 = new CityDuck();
myDuck1.quacks();
myDuck1 = new WildDuck(); // like java type Duck can be reassigned to any type duck
myDuck1.quacks();
var myDuck2 = new CityDuck();
myDuck2 = new WildDuck(); // ** works unlike java too ?? ***
myDuck2.quacks();
/* *************************************
 * GETTER AND SETTERS
 * -- TS has a shortcut
 *      > Prop name syntex: use underscoer before prop name
 *      > Getter/Setter syntax: 'set/get <pop name without underscore>(..) {...'
 *      > Read property: <object>.<property name without underscore>
 *      > Set proerty: <object>.<property name without underscore> = <value>
 */
console.log('GETTERS AND SETTER');
// E.G.
var Plant = /** @class */ (function () {
    function Plant() {
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (val) {
            if (val.length > 3)
                this._species = val; // use like normal field within the class
            else
                this._species = 'NA';
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var p1 = new Plant();
p1.species = 'AB'; // set using assignment operator: This will by default call the setter method. Note the lack of '()' for method call.
console.log(p1.species);
p1.species = 'Rose'; // get with simeple '.' operator: Getter method is called. Note the lack of parentheses
console.log(p1.species);
/* ******************************
 * STATIC PROPERTIES AND METHODS
 * -- Just like Java
 */
console.log('--STATIC PROPERTIES AND METHODS--');
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (rad) {
        return this.PI * 2 * rad;
    };
    Helpers.PI = 3.14; // static prop. readonly make it unmodifiable
    return Helpers;
}());
console.log(Helpers.PI);
console.log(Helpers.calcCircumference(2));
/* **********************************
 * ABSTRACT CLASSES
 * -- cannot be instanciated.
 * -- can only be inherited.
 */
console.log('-- ABSTRACT CLASSES--');
// E.G. and syntax
var Project = /** @class */ (function () {
    function Project() {
        this.environment = 'Dev';
    }
    return Project;
}());
var JavaProject = /** @class */ (function (_super) {
    __extends(JavaProject, _super);
    function JavaProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JavaProject.prototype.setName = function (val) {
        this.name = val;
    };
    return JavaProject;
}(Project));
/* ********************************************
 * PRIVATE CONSTRUCTOR AND SINGLETONS
 */
console.log('--PRIVATE CONSTRUCTOR AND SINGLETONS--');
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!this.instance)
            this.instance = new Singleton();
        return this.instance;
    };
    return Singleton;
}());
var s1 = Singleton.getInstance();
var s2 = Singleton.getInstance();
s1.prop = 'ajay';
s2.prop = 'sanjh';
console.log(s1.prop); // prints sanjh: since s1 and s2 refere to same singleton object
