// Abstracting repetition

function repeatLog(n) {
    for (let i = 0; i < n; i++) {
      console.log(i);
    }
};

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
}
repeat(3, console.log);
// → 0
// → 1
// → 2


// Higher-order functions

// Higher-order functions allow us to abstract over actions, not just values. They come in several forms.
// For example, we can have functions that create new functions.
function bigNumber(m) {
    return n => n>m;
}
let bigNumberA = bigNumber(-5);
console.log(bigNumberA(10));
// → true

// And we can have functions that change other functions.

function multiple(f) {
    return(...args) => {
        console.log("calling..",args);
        let result = f(...args);
        console.log("called",args,"result",result);
        return result;
    };    
}
multiple(Math.max)(1,5,10);
// -->calling.. (3) [1, 5, 10]
// -->called (3) [1, 5, 10] result 10

// We can even write functions that provide new types of control flow.

function unless(test, then) {
    if (!test) then();
}
repeat(3, n => {
    unless(n % 2 == 1, () => {
      console.log(n, "is even");
    });
});
// → 0 is even
// → 2 is even

// forEach

["a", "b","c"].forEach(l => console.log(l));
// -->a
// -->b
// -->c

// Script data set
// {
//     name: "Coptic",
//     ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
//     direction: "ltr",
//     year: -200,
//     living: false,
//     link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
// }


// Transforming with map

// Here, names with direction information "rtl" are printed.
function map(array, transform) {
    let mapped = [];
    for (let element of array) {
      mapped.push(transform(element));
    }
    return mapped;
};
// let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
// console.log(map(rtlScripts, s => s.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", …]


// Summarizing with reduce

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
      current = combine(current, element);
    }
    return current;
};
console.log(reduce([1, 2, 3, 4], (a, b) => a*b, 1));
// -->24