console.log("Comprendiendo JS");
var x = NaN;
console.log(x === x); // false
var isNaNValue = function (v) { return isNaN(v); };
console.log(isNaNValue(NaN)); // true
var x = false;
console.log(!isNaNValue(x) && x !== x); // true
var x = NaN;
console.log(x + 1 === x - 1); // true
var x = "1";
console.log(x > x); // true
