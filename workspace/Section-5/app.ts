/* **********************************
 * CLASSES
 */
// E.G.
class Person_1 {
    name: string; // needs to be assigned a value in constructor
    constructor(name: string) {
        this.name = name;
    }
}
// ** OR *** Shortcut of above:
class Person_11 {    // functions exasactly same as above.
    constructor(public name: string) {}  // name will become a public instance field. can be marked private
}

// ACCESS MODIFIRES
class Employee {
    name = 'ajay'; // public 
    public id = 1 // public
    private salary = 123213 // private
    protected self = this; // protected.
}

/* ***************************
 * FUNCTIONS IN CLASSES
 * -- Function have same access modifiers as well.
 */
class Person_2 {
    private name: string;
    setName(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
}
let p2 = new Person_2();
p2.setName('p2');
console.log(p2.getName());


/* *********************************
 * INHERITANCE:
 * --
 */
console.log("--INHERITANCE--");
// E.G.
class Duck {
    public quacks() {
    }
}
class WildDuck extends Duck {       // inheritance
    public quacks() {               // method overriding
        console.log('Loud Quack');
    }
}
class CityDuck extends Duck {
    public quacks() {
        console.log('Quiet Quack');
    }
}
let myDuck1: Duck = new CityDuck();
myDuck1.quacks();
myDuck1 = new WildDuck();  // like java type Duck can be reassigned to any type duck
myDuck1.quacks();

let myDuck2: CityDuck = new CityDuck();
myDuck2 = new WildDuck();   // ** works unlike java too ?? ***
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
class Plant {
    private _species: string;   // prop name starts with '_'
    
    set species(val: string) {  // setter syntax: note there is no '_'
        if(val.length > 3)
            this._species = val;    // use like normal field within the class
        else 
            this._species = 'NA';
    }

    get species(): string {     // getter syntax: note there is no '_'
        return this._species;
    }
}
let p1 = new Plant();
p1.species = 'AB';              // set using assignment operator: This will by default call the setter method. Note the lack of '()' for method call.
console.log(p1.species);
p1.species = 'Rose';            // get with simeple '.' operator: Getter method is called. Note the lack of parentheses
console.log(p1.species);


/* ******************************
 * STATIC PROPERTIES AND METHODS
 * -- Just like Java
 */
console.log('--STATIC PROPERTIES AND METHODS--');
class Helpers {
    static readonly PI: number = 3.14;  // static prop. readonly make it unmodifiable
    static calcCircumference(rad: number): number {
        return this.PI*2*rad;
    }
}
console.log(Helpers.PI);
console.log(Helpers.calcCircumference(2));


/* **********************************
 * ABSTRACT CLASSES
 * -- cannot be instanciated. 
 * -- can only be inherited.
 */
console.log('-- ABSTRACT CLASSES--');
// E.G. and syntax
abstract class Project {
    environment: string = 'Dev';
    name: string;

    abstract setName(val: string): void;  // abstract method. like java
}
class JavaProject extends Project {
    setName(val: string): void {   // like java concrete class should implement inherited abstract class.
        this.name = val;
    }
}


/* ********************************************
 * PRIVATE CONSTRUCTOR AND SINGLETONS
 */
console.log('--PRIVATE CONSTRUCTOR AND SINGLETONS--');
class Singleton {
    prop: string;

    private static instance: Singleton;
    private constructor(){}

    static getInstance() {
        if(!Singleton.instance)
            Singleton.instance = new Singleton();
        return Singleton.instance;
    }
}
let s1 = Singleton.getInstance();
let s2 = Singleton.getInstance();
s2.prop = 'sanjh';      // prop is assigned for s2 only but it will be set for s1 as well.
console.log(s1.prop);  // prints sanjh: since s1 and s2 refere to same singleton object
