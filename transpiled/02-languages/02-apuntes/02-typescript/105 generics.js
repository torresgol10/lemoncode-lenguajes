///-- GENÉRICOS *******************************************************
// Hay muchas veces que no sabemos con qué tipo de datos nos vamos a encontrar, especialmente
// utilizando colecciones. Sin tipos genéricos tendríamos que recurrir al tipo any y, como ya hemos
// visto, perdemos completamente el tipado de nuestras variables. Es por ello por lo que existe el
// tipo genérico (Semejante al de Java o C#)
// Sintaxis: <(expression)>
// FUNCIONES
// De esta manera podemos utilizarlo en funciones reusables que no
// están atadas a una entidad de en concreto:
function first(list) {
    return list[0];
}
// Así sería el equivalente en las arrow functions
var firstArrow = function (list) { return list[0]; };
// De alguna forma estamos "capturando" el tipo que el usuario debe proporcionar, ¿cuando?
// en el momento de usar dichas funciones:
var res1 = first(["hello", "world"]); // res1 es de tipo string
var res2 = firstArrow([null, null]); // res2 es de tipo string
// Hay casos donde TypeScript es lo suficientemente listo como para inferir el tipo basándonos
// en el argumento
var res3 = first([1, 2, 3, 4, 5]); // res3 es un number
var res4 = firstArrow([false, "0", true, "1"]); // res4 es un string o un boolean
// El tipo de estas funciones genéricas en si mismas se expresaría de la siguiente manera:
var myTypedFunc = first;
// Incluso podríamos usar una letra distinta a la empleada en la declaración incial:
var myTypedFuncAlt = first;
var stringState = { value: "stored" };
// A diferencia de las funciones, los tipos genéricos de las interfaces se tienen que definir
// en su uso por obligación.
var namesState = { value: [] }; // [ts] Generic type 'State<T>' requires 1 type argument(s)
function isStateEmpty(state) {
    return !!state.value;
}
var emptyStringState = isStateEmpty({ value: "" }); // emptyStringState es de tipo boolean
// CLASES
// El formato es similar a los interfaces, pasamos el parámetro genérico entre los ángulos:
var OperatorPlus = /** @class */ (function () {
    function OperatorPlus() {
    }
    return OperatorPlus;
}());
// Y a la hora de utilizarlo lo especificamos:
var plus = new OperatorPlus();
plus.operand1 = 3;
plus.operand2 = 2;
plus.operation = function (a, b) { return a + b; };
console.log(plus.operation(plus.operand1, plus.operand2));
// MULTIPLES GÉNERICOS
// En realidad, aunque los ejemplos anteriores los hemos expuesto con un sólo genérico por
// sencillez, se pueden utilizar tantos como sean necesarios, en forma de lista separada por comas
// entre los ángulos. Por ejemplo:
var compareType = function (arg1, arg2) { return typeof arg1 === typeof arg2; };
console.log(compareType("1", 1));
console.log(compareType("halloween", "halloween"));
