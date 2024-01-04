///-- FUNCIONES ***********************************************************************************
// Tipar una función en TypeScript no es más que especificar los tipos de los argumentos que recibe
// y el tipo de dato que devuelve. Es importante tener en cuenta que el número de argumentos que
// especifiquemos son obligatorios.
function shout(text, upperCase) {
    return (upperCase ? text.toUpperCase() : text) + "!!!";
}
var t1 = shout("hi"); // [ts] Expected 2 arguments, but got 1
var t2 = shout("hi", true);
console.log(t2); // "HI!!!"
// Su homólogo en arrow function
var shout = function (text, upperCase) {
    return (upperCase ? text.toUpperCase() : text) + "!!!";
};
var t3 = shout("hi"); // [ts] Expected 2 arguments, but got 1
var t4 = shout("hi", false);
console.log(t4); // "hi!!"
// *** Argumentos Opcionales
// Utilizando el operador [?] sobre un argumento significa que dicho argumento es opcional
// a la hora de invocar a la función
var shout = function (text, upperCase) {
    return (upperCase ? text.toUpperCase() : text) + "!!!";
};
// Si no pasamos explícitamente un argumento opcional su valor es, al igual que
// en JavaScript, undefined.
console.log(shout("hi")); // "hi!!!" ---> upperCase = undefined.
// *** Argumentos por defecto
// También es posible declarar el tipo de valores por defecto, aunque por lo general es más legible
// el no declarar el tipo y dejar que TypeScript lo infiera del propio valor por defecto.
// ⚠ Al añadir un valor por defecto, no se puede usar el operador opcional de forma explícita.
// Será TS quien automáticamente lo marque como opcional si está inicializado con un valor por 
// defecto y no hay más argumentos obligatorios a continuación.
// el tipo ya es opcional
var shout = function (text, upperCase) {
    if (upperCase === void 0) { upperCase = true; }
    return (upperCase ? text.toUpperCase() : text) + "!!!";
};
console.log(shout("hi")); // "HI!!!"
// *** Funciones como argumentos
// También es posible tipar argumentos que son funciones:
var shout = function (text, getNumExclamation) {
    return text.toUpperCase() + "!".repeat(getNumExclamation());
};
var getRandom = function () { return Math.ceil(Math.random() * 10); }; // Este es mi callback.
console.log(shout("WoW", getRandom));
console.log(shout("WoW", getRandom));
console.log(shout("WoW", getRandom));
console.log(shout("WoW", getRandom));
console.log(shout("WoW", getRandom));
console.log(shout("WoW", getRandom));
var shout = function (text, getNumExclamation) {
    return text.toUpperCase() + "!".repeat(getNumExclamation());
};
console.log(shout("TS rocks", getRandom));
function switchType(c) {
    if (typeof c === "string") {
        return Number(c);
    }
    else {
        return String(c);
    }
}
var r1 = switchType(3);
var r2 = switchType("65");
var r3 = switchType({}); // [ts] Argument of type '{}' is not assignable to parameter of type 'number'
var repeatString = function (text, n) { return Array(n).fill(text).join(" "); };
console.log(repeatString("echo", 3)); // "echo echo echo"
var repeatString = function (text, n) {
    return Array(Math.min(repeatString.maxLimit, n)).fill(text).join(" ");
};
repeatString.maxLimit = 4;
repeatString.description = "Function to repeat n times a text"; // Si omito esto, el tipado fallará.
console.log(repeatString("echo", 8)); // "echo echo echo echo"
