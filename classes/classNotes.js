// oop
// introduced in es5
// -new way to write js previous existing prototype based inheritence
// -a way of cretaing an object -acts like a bllueprint- to create other objects
// classes are closest thing in vanilla js to OOP

// blueprint
// creating objects that share methos and properties
// used to create new objects or instances of that class
// each object can have different values for properties they hold

// body of a class
// denoted between {}
// just like regular functions
// where methos and/or constructor is defines
// constructor--- special method for creating and initializing an object created with a class
            // can only be one method with the name of constructor in a class
            // can use ht ekeyword "super" to access and call funtions (or methods) on an objects parent
            // can be written using two different syntaxes: declarations and expressions
            // ! class declarations are not hoisted (function declarations are)

// class declarations
/*
class Automobile {
    methods go in here
}

class expression- can be named or unnamed

unnamed- takes on what is on the left
let Vehicle = class{
    methods go in here
}

named
let Vehicle = class VehicleTwo {
    methods go in here
}
*/
// a class needs to be declared before accessing it

// Methods
// functions that are stored as object properties
// allow us to perform actions inside of classes then access those actins via dot notation
// two distint methods: constructor and prototype

// contructor
// new keyword introduced
// can only be ONE

class Cookie {//1
    constructor(type, icing, shape){//2
        //3
        this.t = type;
        this.i = icing;
        this.s = shape
    }
    // methods go here
}

// 1 we have a class named Cookie
// 2 the constructor method takes 3 paramethers
    // is invoked when we call upon this class so arguments need to pass through it
// 3 we take the parameters and assign them as values to properties inside of THIS specific object being created
    // left of the assignment operator (=): we assign the keys
    // right of the assignment operator: we use parameters to assign values

let chocolateChip = new Cookie('chocolate chip', false, 'circle');
console.log(chocolateChip);

// prototype methods
// methods are just functions that are stored as object properties
// intriduced in es5
    // shorter syntax for method definitions
    // can be called (invoked) once a new instance has been created

// old syntax
/*
class Automobile{
    start: function() {
        // do something
        
    }
    stop: function(){
        // do somehting else
    }
}*/

// prototype method- new syntax
class Automobile {
    start(){
        // do something
        console.log('starting the car');
    }
    stop() {
        // do something else
        console.log('stopping the car');
    }
    turnLeft() {
        console.log('turning the car left');
    }
}

let newCar = new Automobile();
newCar.turnLeft();

/*
Bronze
Build an Automobile class that takes in a make and a model in the constructor. Bind those two parameters to the class's properties with matching names.
Silver
Add two methods to the Automobile class: start() and stop(). Each method should print out a message to the console that the engine has started or stopped. Include the vehicle's make and model in the output.
Gold
Use the new keyword to create a new instance of the Automobile class and assign the new instance to a variable. Run both methods.*/

class NewAuto {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    start(){
        console.log(`The ${this.make} ${this.model} has started`);
    }
    stop(){
        console.log(`The ${this.make} ${this.model} has stopped`);
    }
}

let anotherCar = new NewAuto('Pontiac', 'Vibe');
console.log(anotherCar.make);
anotherCar.start();
anotherCar.stop();

// extend

class Animal {
    constructor(name){
        this.name = name;
    }

    eat(){
        console.log(`${this.name} eats`);
    }
}

// subclass
//      1   2       3
class Dog extends Animal {
            4
    constructor(name, breed){
            5
        super(name);
        this.type = breed;
    }

    play() {
        console.log(`${this.name} fetches the ball`);
    }
}

// 1
// 2
// 3
// 4
// 5

// 