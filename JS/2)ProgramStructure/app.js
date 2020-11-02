// A fragment of code that produces a value is called an expression.For ex: "hello" or 25

// BINDING(Bağlama

// To catch and hold values, JavaScript provides a thing called a binding, or variable.For ex.
let result = 5+5;
// After a binding has been defined, its name can be used as an expression. For ex.
let number = 2;
console.log(number*5);
// --> 10
// The binding value does not always stay the same and it can change.For ex.
let state = "blue";
console.log(state);
// --> blue
state = "red";
console.log(state);
// --> red
// If you ask for the value of an empty binding, you’ll get the value undefined. For ex.
let a ;
console.log(a);
//--> undefined
// A single let statement may define multiple bindings. The definitions must be separated by commas.For ex.
let c=5 ,b=10;
console.log(c+b);
//--> 15
// We can use const and var to create bindings. var=variable , const = constant
var name = "Derya";
const surname = "Gürler";
console.log(name + surname);
// → Derya Gürler


// BINDING NAMES

// Binding names can be any word.A binding name may include dollar signs ($) or underscores (_).
// Some words used in js cannot be used as binding names.For ex. break,case,let


// FUNCTIONS

// Executing a function is called invoking, calling, or applying it. You can call a function by putting parentheses after an expression that produces a function value.
// Values given to functions are called arguments. 

// The console.log function
let  x  =  30 ;
console.log( "x'in değeri" , x );
// → x'in değeri 30'dur

// RETURN VALUES
console.log(Math.max(2, -4));    // Math.max takes many values and writes the largest value.
// → 2
console.log(Math.max(2, 4,10));
// → 10

console.log(Math.min(2, 4) + 100); //Math.min takes many numeric values and writes the smallest value.
// → 102

// CONTROL FLOW

// If the program contains multiple statements, it works from top to bottom.

let num = 5;
console.log("Your number is the square root of " + num * num);

// CONDITIONAL EXECUTION

// We can create conditional execution with if keyword.

let string ="hello";
if(string=="hello"){
    console.log(string +" "+"world");
}
// If-else using
// PS:JavaScript isNaN method checks if the value / variable it gets is a digit.Returns true if it is not a digit.
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {       
  console.log("Your number is the square root of " +
              theNumber * theNumber);
} else {
  console.log("Please enter the number?");
}

// If-else if-else
// If you have more than two paths to choose from, you can “chain” multiple if/else pairs together. 
let n = 80;
if (n < 10) {
  console.log("Small");
} else if (n < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}
// --->Medium

// while loop
let sayi=1;
while (sayi <= 13) {
  console.log(sayi);
  sayi = sayi + 2;
}
// --> 1 3 5 7 9 11 13
// do loop
let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

// for loops
for (let numb = 1; numb <= 13; numb = numb + 2) {
  console.log(numb);
}
// --> 1 3 5 7 9 11 13

// Breaking Out of a Loop  
// We can exit the loop with the break command.
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// → 21

// Updating bindings succinctly
// sayac = sayac + 1; this situation equals the sayac += 1;
// sayac = sayac - 1; this situation equals the sayac -= 1;
// For sayac += 1 and sayac-= 1, there are even shorter equivalents: sayac++ and sayac--.


// Dispatching on a value with switch
var say=1; 
switch (say){
  case 0: 
    console.log("say is equal to 0");
    break;
  case 1: 
    console.log("say is equal to 1");
    break; 
  default: 
    console.log("say value is empty");
}

// PS: We can add the comment line with //.

for(let symbol="#";symbol.length<8;symbol.length++){
  console.log(symbol.length);
}

// AN EXAMPLE
let star = "*";
for(let i=0; i< 5; i++) {
console.log(star);
star = "*" + star ;
}

//--> *
//--> **
//--> ***
//--> ****
//--> *****

