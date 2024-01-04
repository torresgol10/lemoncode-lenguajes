///-- DEFAULT ARGUMENTS **************************************************************************
// A partir de ES6 podemos asignar valores por defecto a los argumentos de una función:
var greet = function (name) {
    if (name === void 0) { name = "Unknown"; }
    return console.log("Hello, " + name);
};
greet(); // "Hello, Unknown"
greet("Jake"); // "Hello, Jake"
// Los valores por defecto son aplicados si el argumento es específicamente undefined
greet(undefined); // "Hello, Unknown"
greet(null); // "Hello, null"
// Se pueden aplicar valores por defecto a variables asignadas por destructuring
var logName = function (_a) {
    var _b = _a.name, name = _b === void 0 ? "Unknown" : _b;
    return console.log(name);
};
logName({ age: 24 }); // "Unknown"
logName({ name: "Carl" }); // "Carl"
logName({}); // "Unknown"
// PREGUNTA: Pero ¿que creeis que pasaría si llamo a la función sin argumento?
// ¿o con argumento null?
logName(); // ⚠ Si no inicializamos el parametro a {} esto daría TypeError.
// Para evitar esos errores tenemos que inicializar también el argumento completo como objeto
// vacío, no solo su propiedad name.
var logName = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.name, name = _c === void 0 ? "Unknown" : _c;
    return console.log(name);
};
logName(); // Unknown. Ahora si!
// Este sería el único caso todavía problemático.
// Al ser null un objeto no se toma la inicialización por defecto, el problema es que no se puede
// hacer destructuring sobre null.
logName(null); // ⚠ Uncaught TypeError.
// No obstante, ahora que ya conocemos el destructuring y el operador nullish coalescing, tenemos
// una alternativa igual de elegante y concisa. La solución para cubrirnos todos los casos sería
// la siguiente:
var logName = function (user) {
    var _a = (user !== null && user !== void 0 ? user : {}).name, name = _a === void 0 ? "Unknown" : _a;
    console.log(name);
};
logName({}); // "Unknown"
logName(); // "Unknown"
logName(null); // "Unknown"
// Ejemplo con arrays:
var sumDice = function (_a) {
    var _b = _a === void 0 ? [] : _a, _c = _b[0], d1 = _c === void 0 ? 0 : _c, _d = _b[1], d2 = _d === void 0 ? 0 : _d;
    return d1 + d2;
};
console.log(sumDice()); // 0
console.log(sumDice([])); // 0
console.log(sumDice([3])); // 3
