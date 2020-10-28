// numbers

console.log(12);

//arithmetic
console.log(100 + 4 * 11 );
// or
console.log((100 + 4) * 11 );

// special numbers
 console.log(0/0); // The infinite / infinite operation results in "NotANumber".
//  strings
console.log("hello world");
console.log("hello \n world");
console.log(`the result is ${2*5}`); //  ${} returns the result of the operation written in.
// unary operators
console.log(typeof "school");
console.log(typeof 128);

// BOOLEAN VALUES

// Comparison
console.log(20>5)
// → true
console.log(5<1)
// → false
// We can compare the strings
console.log("aa"<"bbb");
// → true
// Other similar operators are >= (greater than or equal to), <= (less than or equal to), == (equal to), and != (not equal to).
console.log("leyla" != "esra")
// → true
// But NaN value is not equal to itself.
console.log(NaN == NaN)
// → false


// LOGICAL OPERATORS

// The && operator represents logical and.Its result is true only if both the values given to it are true.

console.log(5>2 && 4>2);
// → true
console.log(1>2 && 4>2); // false && true 
// → false

// The || operator denotes logical or.  It produces true if either of the values given to it is true.

console.log(false || true)
// → true
console.log(false || false)
// → false

// EMPTY VALUES

