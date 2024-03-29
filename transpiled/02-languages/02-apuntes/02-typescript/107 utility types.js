///-- TIPOS GENÉRICOS DE UTILIDADES ***************************************************************
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// De hecho existe el tipo ReadonlyArray
// -- Caso Práctico --
// Un caso muy útil de Readonly se aplica para garantizar que una implementación no va a mutar un
// objeto determinado. Así, el consumidor de dicha implementación (una función por ejemplo) tiene
// garantías de que los parámetros de entrada no serán mutados. Pongamos un ejemplo con arrays,
// donde se ve más claro, aunque lo mismo serviría para objetos:
var sampleArray = [1, 2, 3];
var tailMutable = function (array) { return (array.shift(), array); };
var tailImmutable = function (array) {
    var _a = array !== null && array !== void 0 ? array : [], tail = _a.slice(1);
    return tail;
};
console.log(sampleArray, tailMutable(sampleArray));
console.log(sampleArray, tailImmutable(sampleArray));
// -- Caso Práctico --
var createState = function (initialState) {
    var state = initialState;
    return {
        setState: function (partialState) { return (state = __assign(__assign({}, state), partialState)); },
    };
};
var setState = createState({
    username: "b4dc4t",
    avatar: "cat.png",
    posts: 18,
    premium: false,
}).setState;
console.log(setState({ posts: 19, premium: true }));
// -- Caso Práctico 1  --
var c3d = {
    // TS: Property 'z' is missing
    x: 3,
    y: 0,
    // z: 5,
};
// -- Caso Práctico 2  --
var Point3D = /** @class */ (function () {
    function Point3D(coord) {
        this.coord = __assign(__assign({}, coord), { z: coord.z || 0 });
    }
    Point3D.prototype.getZ = function () {
        return this.coord.z;
    };
    return Point3D;
}());
var p3d = new Point3D({ x: 1, y: 1 });
console.log(p3d.getZ());
// Ejemplo de implementación en JS:
// Implementación más compatible
var calculateCommon = function (a, b) {
    var result = __assign({}, a);
    for (var key in a) {
        if (a.hasOwnProperty(key) && !b.hasOwnProperty(key))
            delete result[key];
    }
    return result;
};
// Implementación más elegante
/*
const calculateCommon2 = <A extends object, B extends object>(a: A, b: B): Common<A, B> =>
  Object.fromEntries(
    Object.entries(a).filter(([prop]) => b.hasOwnProperty(prop))
  ) as Common<A, B>;
*/
var userId = {
    name: "Javier",
    id: 324374,
};
var userDetails = {
    name: "Javier",
    id: "324374",
    age: 36,
    phone: 900900900,
    married: true,
};
var userCommon = calculateCommon(userId, userDetails);
console.log(userCommon);
// -- Caso Práctico --
// Versión más espartana.
var omit = function (o) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    var result = __assign({}, o);
    keys.forEach(function (key) { return delete result[key]; });
    return result;
};
// Versión más funcional.
var omit2 = function (o) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    return Object.fromEntries(Object.entries(o).filter(function (_a) {
        var key = _a[0];
        return !keys.includes(key);
    }));
};
var sampleObj = { a: "A", b: "B", c: "C" };
var onlyC = omit(sampleObj, "a", "b");
console.log(onlyC);
var eurSizes = { small: "s", medium: "m", large: "l" };
var ukSizes = { small: 8, medium: 10, large: 12 };
var pivotInventory = function (list) {
    return Object.entries(list).reduce(function (result, _a) {
        var name = _a[0], product = _a[1];
        result[product.id] = __assign({ name: name }, omit(product, "id"));
        return result;
    }, {});
};
var productsByName = {
    arroz: { id: 7, stock: false },
    papas: { id: 6, stock: true },
    jamon: { id: 3, stock: true },
};
var productsById = pivotInventory(productsByName);
console.log(productsById);
// Ejemplo de API,
var bookings = [
    { id: 31, prepaid: false, price: 80, room: "standard" },
    { id: 16, prepaid: true, price: 115, room: "standard" },
    { id: 25, prepaid: true, price: 250, room: "superior" },
];
var bookingAPI = {
    getBooking: function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, bookings.find(function (b) { return b.id === id; }) || null];
            });
        });
    },
};
// Ejemplo intellisense
var foo = {
    id: null, // Error: Type 'null' is not assignable to type 'number'
    prepaid: false,
    price: 31,
    room: "superior",
};
// *** FUNCTION HELPERS ***************
// RETURN TYPE: Permite inferir el tipo de dato que devuelve una función.
// PARAMETERS: Permite inferir el tipado de los argumentos de entrada de una función en
// formato tupla.
// -- Caso Base --
var addTimestamp = function (user, useLocale) {
    if (useLocale === void 0) { useLocale = false; }
    return (__assign(__assign({}, user), { timestamp: useLocale ? Date().toLocaleString() : Date.now() }));
};
var delay = function (f, t) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(f.apply(void 0, args)); }, t);
        });
    };
};
var shout = function (text) { return "".concat(text.toUpperCase(), "!!!"); };
console.log(shout("pim pam"));
var delayedShout = delay(shout, 1000); // Check intellisense over delayedShout
delayedShout("toma lacasitos").then(function (message) { return console.log(message); });
