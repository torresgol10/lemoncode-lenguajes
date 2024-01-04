///-- SYMBOL *************************************************************************************
// A partir de ES6 se añade un nuevo tipo primitivo de datos: Symbol
// Este tipo de datos se usa para representar valores únicos, veámoslo:
// syntaxis: Symbol("etiqueta") | Symbol()
var mySymbol = Symbol('sample');
console.log(typeof mySymbol); // "symbol"
console.log(mySymbol); // "Symbol(sample)"
console.log(mySymbol.toString()); // "Symbol(sample)"
// Los Symbol tienen una peculiaridad y es que representan valores únicos:
var sym1 = Symbol("hello");
var sym2 = Symbol("hello");
console.log(sym1 === sym2); // false
// Nos permiten crear propiedades menos accesibles, ya que tienes que estar en posesión de ese
// símbolo para poder acceder a esa propiedad.
var user = { name: "Evan" };
var id = Symbol("id");
user[id] = 144;
console.log(user[id]); // 144;
console.log(user); // {name: "Evan", Symbol(id): 144}
console.log(Object.keys(user)); // ["name"]
for (var prop in user) {
    console.log(prop, user[prop]); // "name", "Evan"
}
console.log(Object.getOwnPropertyNames(user)); // ["name"]
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(id)]
var idSym = Object.getOwnPropertySymbols(user)[0];
console.log(user[idSym]); // 144;
