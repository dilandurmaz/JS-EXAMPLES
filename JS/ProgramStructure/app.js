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

// while and do loops
let sayi=1;
while (number <= 13) {
  console.log(sayi);
  sayi = sayi + 2;
}