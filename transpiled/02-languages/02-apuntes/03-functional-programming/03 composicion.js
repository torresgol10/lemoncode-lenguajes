// COMPOSICIÓN **********************************************************
// La composición no es más que agrupar un conjunto de pequeñas funciones que reciben un número de parámetros en cadena
// y devolver una función que vaya ejecutando una a una de las funciones pasadas en cadena pasando el resultado de
// las funciones ejecutadas a las funciones siguiente (como una tubería)
// Supongamos el siguiente ejemplo:
var toUpper = function (text) { return text.toUpperCase(); };
console.log(toUpper("hey you"));
var exclamate = function (text) { return text + '!!'; };
console.log(exclamate("hey you"));
var coupledShout = function (text) { return exclamate(toUpper(text)); };
console.log(coupledShout("hey you"));
// Como vemos la función "shout" realiza una llamada a "toUpper" y a "exclamate"
// Aunque a simple vista puede parecer un poco ilegible lo que vemos es que dichas funciones están encadenadas
// la entrada de "shout" es utilizada por "toUpper" y devuelve una salida que a su vez es la entrada de "exclamate"
// cuya salida es el resultado final de "shout"
// Si tuviésemos más funciones el resultado podría ser más difícil de apreciar a simple vista:
var nextCharFromNumberImperative = function (char) {
    var trimmed = char.trim();
    var number = parseInt(trimmed);
    var nextNumber = number + 1;
    return String.fromCharCode(nextNumber);
};
console.log(nextCharFromNumberImperative(' 64 '));
// Si intentamos reducirlo a una sola línea vemos que es aún más difícil entender qué está pasando
var nextCharFromNumberOneLine = function (char) { return String.fromCharCode(parseInt(char.trim()) + 1); };
// Aquí es donde brilla la composición
// Por definición:
// compose = f · g
// compose :: (b -> c) -> (a -> b) -> (a -> c)
// Se lee "Compose es una función que recibe como argumento una función que transforma de 'B' a 'C' y otra función
// que transforma de 'A' a 'B' y devuelve una función que transforma de 'A' a 'C'"
var composeTwo = function (f, g) { return function (x) { return f(g(x)); }; };
var shout = composeTwo(exclamate, toUpper); // Tiene el mismo orden qque exclamate(toUpper(x))
console.log(shout("hey you"));
// Veamos cómo corregir la función "nextCharFromNumberOneLine" para que se vea más claras las transformaciones
// utilizando "composeTwo"
var addOne = function (num) { return num + 1; };
var trim = function (str) { return str.trim(); };
var fromCharCode = function (num) { return String.fromCharCode(num); };
var nextCharFromNumberComposedTwo = composeTwo(fromCharCode, composeTwo(addOne, composeTwo(parseInt, trim)));
console.log(nextCharFromNumberComposedTwo(' 64'));
// Vemos que anidar "composeTwo" tampoco resuelve el problema por lo que crearemos una función "compose" que reciba
// un número de funciones dinámicas:
var compose = function () {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i] = arguments[_i];
    }
    return functions.reduce(function (f, g) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return f(g.apply(void 0, args));
    }; });
};
var nextCharFromNumber = compose(fromCharCode, addOne, parseInt, trim);
console.log(nextCharFromNumber(' 64'));
// Gracias a la composición podemos evitarnos el iterar múltiples veces sobre un array.
// Veamos el siguiente ejemplo:
var numbers = [16, 31, 46, 57, 66];
var result = numbers.map(function (x) { return x * 15; }).map(function (x) { return x / 3; });
console.log(result);
// Si extraemos y componemos las funciones de cada map conseguiremos una única función que genere un mismo resultado
var mutiplyBy15 = function (x) { return x * 15; };
var divideBy3 = function (x) { return x / 3; };
var transformation = compose(divideBy3, mutiplyBy15);
console.log(numbers.map(transformation));
