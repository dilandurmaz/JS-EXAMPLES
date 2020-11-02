// Defining A Function

const cube = function(x) {
    return x * x *x;
};
console.log(cube(3));
// → 27

// A function can have multiple parameters or no parameters at all.
const hello = function() {
    console.log("Hello!");
};
hello();
// -->Hello
const sum = function(a,b){
    console.log(a+b);
}
sum(5,10);
//-->15

// Bindings and Scopes

// If you create variables inside the function with let and const, they will not be seen outside the function.
// But it is seen if it is created with var.
const x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40

// Nested scope (İç içe)

const sumPrice = function(sum){
    const comp=function(amount,price){
        sum = amount*price;
        console.log(sum);
        
    };
    comp(5,20);
    comp(3,10);
};
sumPrice();
// -->100
// -->30

// Functions as values
let example = function(){
    console.log("this is an examle");
}
if(true){
    example = function(){
        console.log("changed");
    }
}
example();
// --> changed


// Declaration notation
// Function declarations are not part of the regular top-to-bottom flow of control.
console.log("The future says:", future());
function future() {
  return "You'll never have flying cars";
}

// Arrow functions

// The arrow comes after the list of parameters and is followed by the function’s body. 
// It expresses something like “this input (the parameters) produces this result (the body)”.

const simple = (a,b)=>{
    if(a<b){
        console.log("The value of a is less than the value of b. ");
    }
    else if(a>b){
        console.log("The value of b is less than the value of a. ");
    }
    else{
        console.log("a is equal to b.");
    }
}
simple(5,2);
// 
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
// 
const horn = () => {
    console.log("Toot");
};

// Optional Arguments

function square(x) { return x * x; }
console.log(square(4, true, "hedgehog")); //If we give js too many parameters, it will ignore them.
// → 16

// If we give less parameters, it is defined as undefined.
function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}
console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5

// Another example
function power(base, exponent = 2) {
let result = 1;
for (let count = 0; count < exponent; count++) {
    result *= base;
    }
return result;
}
console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64


// Closure

// In the example, multiplier is called and creates an environment in which its factor parameter is bound to 2.
// The function value it returns, which is stored in twice, remembers this environment. 
// So when that is called, it multiplies its argument by 2.

function multiplier(factor) {
    return number => number * factor;
} 
let twice = multiplier(2);
console.log(twice(3));
// → 6


// Recursion

// Recursion is simply calling the function itself.
function Factorial(n) {
    if (n === 1) {
        return n;
    } else {
        return n * Factorial(n - 1);
    }
}
Factorial(3);
//--> 6


// An Example

const min = (num1,num2)=>{
    if(num1<num2){
        console.log(num1);
    }
    else if(num2<num1){
        console.log(num2);
    }
    else{
        console.log("Equal");
    }
}
min(-5,10);
// --> -5
min(10,0);
// --> 0