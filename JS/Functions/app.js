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
