///-- REST/SPREAD OPERATOR ***********************************************************************
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// A partir de 2015 con la llegada de ES6 podemos extender o agrupar los valores de los arrays
// gracias a los operadores "spread"/"rest".
// Podemos extender los valores de un array en un nuevo array:
var original = ["one", "two", "three"];
var copy = __spreadArray([], original, true); // Extendemos cada elemento del array origen en el array destino
console.log(original); // ["one", "two", "three"]
console.log(copy); // ["one", "two", "three"]
// Plantear pregunta, ¿entonces, que nos dará esto?
console.log(original === copy); // false
console.log(original[0] === copy[0]); // true
// Cuando se hace "spread" de los items, se aplica una copia "poco profunda" o "shallow copy",
// es decir, los objetos no se clonan, se pasan por referencia.
var original = [{ name: "Alan" }, { name: "Evan" }, { name: "Ana" }];
var copy = __spreadArray([], original, true);
console.log(original[0]); // {name: "Alan"}
console.log(copy[0]); // {name: "Alan"}
console.log(original[0] === copy[0]); // true
// Si muto alguno de los objetos, se verá reflejado en ambos arrays:
copy[0].age = 23;
console.log(original[0]); // {name: "Alan", age: 23}
console.log(copy[0]); // {name: "Alan", age: 23}
// También se pueden extender valores de una rray como argumentos de una función:
function main(first, second, third) {
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(arguments);
}
var values = ["hey", "ho", "let's go", "yay"];
main.apply(void 0, values); // "hey"
// "ho"
// "let's go"
// Arguments(4) ["hey", "ho", "let's go", "yay" ... ]
// El operador "rest" hace justo lo contrario que "spread", aunque su notación es la misma: 
// agrupa argumentos en un array. Es decir, asigna todo los argumentos pasados a una funcion a
// elementos de un array. ¿Os acordáis de que las lambdas no tenían variable dinámica "arguments"?
// Se puede emular con el operador "rest":
var sum = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (acc, num) { return acc + num; }, 0);
};
console.log(sum()); // 0
console.log(sum(1, 2, 3)); // 6
// Cuando utilizamos "rest" podemos aislar argumentos iniciales y agrupar los restantes:
// ⚠ el operador "rest" siempre va el último
var sumAllButFirst = function (_first) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    return nums.reduce(function (acc, num) { return acc + num; }, 0);
};
console.log(sumAllButFirst()); // 0
console.log(sumAllButFirst(1, 2, 3)); // 5
// A partir de ES9 (2018) podemos hacer "rest/spread" también en propiedades de objetos:
// Podemos extender propiedades existentes en un objeto, a otro objeto nuevo:
var original = {
    name: "Evan",
    surname: "Smith",
    country: "USA",
};
var copy = __assign({}, original); // Extendemos cada propiedad de "original" a otro objeto nuevo
console.log(original); // {name: "Evan",surname: "Smith",country: "USA"}
console.log(copy); // {name: "Evan",surname: "Smith",country: "USA"}
console.log(original === copy); // false
console.log(original.name === copy.name); // true
// De nuevo, la copia de propiedades es poco profunda o "shallow copy". No se clonan sino que se
// pasan por referencia.
var original = {
    name: "Evan",
    surname: "Smith",
    country: {
        id: 21,
        name: "Spain",
        iso3: "SPA",
    },
};
var copy = __assign({}, original);
console.log(copy.country); // {id: 21,name: "Spain",iso3: "SPA"}
console.log(original.country === copy.country); // true
// Asi pues un cambio de "country" se refleja en ambos objetos, el original y la copia.
copy.country.id = 23;
console.log(original.country); // {id: 23,name: "Spain",iso3: "SPA"}
console.log(copy.country); // {id: 23,name: "Spain",iso3: "SPA"}
// Una combinación potente es aplicar "destructuring" y "rest" al mismo tiempo para aislar
// propiedades de objetos en argumentos de funciones, por ejemplo:
var student = {
    name: "Evan",
    surname: "Smith",
    country: {
        id: 21,
        name: "Spain",
        iso3: "SPA",
    },
};
var excludeCountry = function (_a) {
    var country = _a.country, others = __rest(_a, ["country"]);
    return others;
};
var nameAndSurname = excludeCountry(student);
console.log(nameAndSurname); // {name: "Evan", surname: "Smith"}
// Esto es útil para eliminar propiedades de objetos de forma inmutable, o dicho de forma llana,
// para quedarnos "con lo que nos interesa".
