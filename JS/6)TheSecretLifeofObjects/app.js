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




