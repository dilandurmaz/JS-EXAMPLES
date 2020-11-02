// Array

// The first index of an array is zero, not one.
// So the first element is retrieved with listOfNumbers[0]. 
            //       0, 1, 2, 3, 4 ---> index number
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2

// Methods

// Both string and array values contain, in addition to the length property, a number of properties that hold function values.
let samp = "sample";
console.log(typeof samp.toUpperCase);
// → function
console.log(samp.toUpperCase());
// → SAMPLE

//In this example we see how to add and remove values to the array.

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]

// OBJECTS

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// → false
console.log(day1.events);
// → ["work", "touched tree", "pizza", "running"]
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false
console.log(day1);
// →{squirrel: false, events: Array(4), wolf: false}


// The in operator tells whether the object has that property
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true


// Object.keys using
console.log(Object.keys({x: 0, y: 0, z: 2,d:5}));
// → ["x", "y", "z" ,"d"]


// Object.assign
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4,d:5});
console.log(objectA);
// → {a: 1, b: 3, c: 4,d:5}

let journal = [
    {events: ["work", "touched tree", "pizza","running", "television"],
     squirrel: false},
    {events: ["work", "ice cream", "cauliflower","lasagna", "touched tree", "brushed teeth"],
     squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts","beer"],
     squirrel: true},
];
console.log(journal[0].events[2]);
// -->pizza


// Mutability

let obj1 = {value: 10};
let obj2 = obj1;
let obj3 = {value: 10};

console.log(obj1 == obj2);
// → true
console.log(obj1 == obj3);
// → false

obj1.value = 5;
console.log(obj2.value);
// → 5
console.log(obj3.value);
// → 10


// If we want to change the value in the object;
const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
console.log(score.visitors);
// This isn't allowed
// score = {visitors: 1, home: 1};

// Adding an element to an object using a function
let situation=[];
const add =(way,price)=>{
    situation.push({way,price});
};
add("istanbul",50);
add("izmir",30);
console.log(situation);


// method of includes
var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// --> true

console.log(pets.includes('bear'));
// -->false


// Array Loops
var lang = ['english','german','turkish'];
for(let i=0 ;i<lang.length; i++){
    let d = lang[i];
    console.log(d);
}
// -->english
// -->german
// -->turkish



// Further Arrayology

// The corresponding methods for adding and removing things at the start of an array are called unshift and shift.
let alp = ["a","b","c","d"];
function getTask() {
  return alp.shift();
}
function rememberUrgently(task) {
  alp.unshift(task);
}
getTask();
console.log(alp);
// -->["b", "c", "d"]
rememberUrgently("aa");
console.log(alp);
// -->["aa", "b", "c", "d"]

// indexof and lastindexof used to check if an array has a value.
// The indexof function starts searching at the beginning of the array.
// The lastindexof function starts searching at the lasting of the array.
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3

// slice function
console.log([0, 1, 2, 3, 4].slice(1, 4));
// → [1,2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]


// Strings and their properties


// The trim method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string.
console.log("    okay \n".trim());
// → okay

// zeroPad function
console.log(String(15).padStart(5, "02"));
// → 02015

// repeat function
console.log("he".repeat(4));
// → hehehehe

// random number is generated (0-1 between)
console.log(Math.random());
// If we don't want a fractional number, we can use the floor function.
console.log(Math.floor(Math.random()*10));

// JSON (JavaScript Object Notation)

// JSON data:

// {
//   "squirrel": false,
//   "events": ["work", "touched tree", "pizza", "running"]
// }

// JSON.stringify takes a javascript object and converts it to string format
let string = JSON.stringify({squirrel: false,events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}

// JSON.parse makes object from string
console.log(JSON.parse(string));
// →  {squirrel: false, events: Array(1)}

