console.log("Comprendiendo JS")

let x = NaN
console.log(x === x); // false


const isNaNValue = v => isNaN(v)
console.log(isNaNValue(NaN)); // true

let x = false
console.log(!isNaNValue(x) && x !== x); // true


let x = NaN
console.log(x + 1 === x - 1); // true

let x = "1"
console.log(x > x); // true
