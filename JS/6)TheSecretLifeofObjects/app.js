// Methods
// Methods are nothing more than properties that hold function values.

let dog = {};
dog.speak = function(line) {
  console.log(`The dog says '${line}'`);
};

dog.speak("hav hav ");
// → The dog says 'hav hav';

// the other example;
// this is an extra parameter passed in a different way.
function speaks(line) {
    console.log(`The ${this.type} dog says '${line}'`);
}
let whiteDog = {type: "white", speaks};
let hungryDog = {type: "hungry", speaks};
  
whiteDog.speaks("I am a white dog.");
// -->The white dog says 'I am a white dog.'
hungryDog.speaks("I am hungry.");
// --> The hungry dog says 'I am hungry.'


// instead of this we can use call method
speaks.call(hungryDog, "Heyy!");
// → The hungry dog says 'Heyy!'


// Prototypes
let empty = {a:"1"};
console.log(empty);
// Most object has a prototype.
let protoDog = {
    speakss(line) {
      console.log(`The ${this.type} dog says '${line}'`);
    }
};
let happyDog = Object.create(protoDog);
happyDog.type = "happy";
happyDog.speakss("hahahahah!");
//-->The happy rabbit dog 'hahahahah!'


// Classes

// constructor function 
function makeDog(type) {
    let dog = Object.create(protoDog);
    dog.type = type;
    return rabbit;
}


// The prototype object used when constructing objects is found by taking the prototype property of the constructor function.
function Dog(type) {
    this.type = type;
}
Dog.prototype.speak = function(line) {
console.log(`The ${this.type} dog says '${line}'`);
}; 
let angryDog = new Dog("angry");
angryDog.speak("ım angry");
console.log(angryDog);


// Class notation

// JavaScript classes are constructor functions with a prototype property.
// Such a spelling has been developed after 2015.

class Dogs {
    constructor(type) {
      this.type = type;
    }
    speak(line) {
      console.log(`The ${this.type} dog says '${line}'`);
    }
}
let  sadDog = new Dogs("sad");
console.log(sadDog);


// Overriding derived properties
// If you add a feature that is in the prototype, you crush the existing one.
Dogs.prototype.height="tall";
console.log(sadDog.height);
// -->tall
sadDog.height="short";
console.log(sadDog.height);
// -->short

// Polymorphism

Dogs.prototype.toString = function() {
    return `a ${this.type} dog`;
};
console.log(String(sadDog));
// → a sad dog

// Symbols

// Symbols are unique and not created twice.

let sym = Symbol("name");
Dogs.prototype[sym] = 55;
console.log(sadDog[sym]);
// → 55

// symbol example
const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`;
};
console.log([1, 2].toString());
// → 1,2
console.log([1, 2][toStringSymbol]());
// → 2 cm of blue yarn

// other method;
let stringObject = {
  [toStringSymbol]() { return "a car;" }
};
console.log(stringObject[toStringSymbol]());
// → a car


// The iterator interface

// When called, that method should return an object that provides a second interface, iterator. 
let okIterator = "HE"[Symbol.iterator]();
console.log(okIterator.next());
// → {value: "H", done: false}
console.log(okIterator.next());
// → {value: "E", done: false}
console.log(okIterator.next());
// → {value: undefined, done: true}


// GET, SET

//We use the set method when we assign a value to the variable, and the get method when we try to read the value of the variable.
class Animal {
  constructor(name) {
    this._name = name;
  }
  get Name() {
    return "Hello " + this._name;
  }
  set Name(newValue) {
    this._name = newValue;
  }
}
var vAnimal = new Animal("Tom");
console.log(vAnimal.Name);

vAnimal.Name = "Boncuk";
console.log(vAnimal.Name);

// Inheritance

class Shape {
  constructor (id, x, y) {
    this.id = id
    this.move(x, y)
  }
  move (x, y) {
    this.x = x
    this.y = y
  }
}
class Rectangle extends Shape {
   constructor (id, x, y, width, height) {
     super(id, x, y)
     this.width  = width
     this.height = height
   }
}
const rec = new Rectangle(1,5,10,15,10);
console.log(rec);
// -->Rectangle {id: 1, x: 5, y: 10, width: 15, height: 10}7
rec.move(21,30);
console.log(rec);
// -->Rectangle {id: 1, x: 21, y: 30, width: 15, height: 10}


// TERNARY OPERATOR (?)

function getFee(isMember) {
  return isMember ? " $5" : "$10";
}
console.log(getFee(true));
// --> $5
console.log(getFee(false));
//-->  $10
console.log(getFee(1));
// --> $5


//  Anonymous Function
// This function is called with variable name.
var x = function (a, b) {console.log(a * b)};
var z = x(4, 3);
// -->12

