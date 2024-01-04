// CURRY **********************************************************
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Curry es la acción de convertir una función de múltiples argumentos en una secuencia de llamadas a funciones
// con un único argumento, también llamadas "unary" o de "arity of 1" / aridad (matemática) de 1
function createMessageUncurrified(sender, adjective, noun) {
    return "Hey!, ".concat(sender, " just want to tell you that you're a ").concat(adjective, " ").concat(noun, "!!");
}
console.log(createMessageUncurrified("Eva", "awesome", "teacher"));
function createMessageClassicFunction(sender) {
    return function (adjective) {
        return function (noun) {
            return "Hey!, ".concat(sender, " just want to tell you that you're a ").concat(adjective, " ").concat(noun, "!!");
        };
    };
}
console.log(createMessageClassicFunction("Eva")("awesome")("teacher"));
// En formato arrow function es más expresivo:
var createMessageArrow = function (sender) { return function (adjective) { return function (noun) { return "Hey!, ".concat(sender, " just want to tell you that you're a ").concat(adjective, " ").concat(noun, "!!"); }; }; };
console.log(createMessageArrow("Eva")("awesome")("teacher"));
// ¿Por qué complicar las llamadas creando nuevas funciones? Porque nos ofrecen una manera de personalizar o
// configurar dichas funciones
var messageFromEva = createMessageArrow("Eva");
console.log(messageFromEva("awesome")("teacher"));
var awesomeMessageFromEva = messageFromEva("awesome");
console.log(awesomeMessageFromEva("teacher"));
console.log(awesomeMessageFromEva("parent"));
var badMessageFromEva = messageFromEva("bad");
console.log(badMessageFromEva("teacher"));
console.log(badMessageFromEva("parent"));
// Veamos otro ejemplo:
var multiply = function (num1) { return function (num2) { return num1 * num2; }; };
var divide = function (divisor) { return function (dividend) { return dividend / divisor; }; };
console.log(multiply(6)(10));
// Crear pequeñas funciones configurables nos ofrece muchísima flexibilidad y en algunos casos nos ayuda
// a evitar la duplicidad de código
var numbers = [35, 69, 48, 81, 20, 87, 71, 70];
var tripleIt = multiply(3);
var isEven = function (num) { return num % 2 === 0; };
var mapUncurrified = function (collection, transform) { return collection.map(transform); };
console.log(mapUncurrified(numbers, tripleIt));
// Vamos a currificar la función map:
var map = function (transform) { return function (collection) { return collection.map(transform); }; };
var filter = function (predicate) { return function (collection) { return collection.filter(predicate); }; };
var tripleEverything = map(tripleIt);
var getEvenFromList = filter(isEven);
console.log(tripleEverything(numbers));
console.log(getEvenFromList(numbers));
// Hay veces que nos interesa currificar funciones existentes. Para ello podemos crear una función que reciba una
// función como parámetro y se encargue de currificarla según los argumentos que reciba
var curry = function (originalFn) { return function curried() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length >= originalFn.length) {
        return originalFn.apply(void 0, args);
    }
    return function () {
        var args2 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args2[_i] = arguments[_i];
        }
        return curried.apply(void 0, __spreadArray(__spreadArray([], args, false), args2, false));
    };
}; };
var createMessageCurried = curry(createMessageUncurrified);
console.log(createMessageCurried("Sandra", "nice", "guy"));
console.log(createMessageCurried("Sandra", "nice")("guy"));
console.log(createMessageCurried("Sandra")("nice", "guy"));
console.log(createMessageCurried("Sandra")("nice")("guy"));
