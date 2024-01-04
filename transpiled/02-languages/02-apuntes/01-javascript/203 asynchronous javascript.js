///-- ASYNCHRONOUS JAVASCRIPT ********************************************************************
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
var _this = this;
/*
Para dominar JavaScript es imprescindible tener unas buenas nociones de asincronía y conocer el
"Event Loop" que implementa el lenguaje como solución para gestionar eventos y llamadas
asíncronas. Recomendamos encarecidamente la lectura de la siguiente guía para profundizar en estos
conceptos: https://lemoncode.net/lemoncode-blog/2018/1/29/javascript-asincrono

Una llamada asíncrona es aquella donde la tarea asociada se ejecuta fuera del contexto de nuestra
aplicación,y por tanto nuestra aplicación no consume recursos (CPU). A esto se le conoce como
operaciones de entrada/salida (I/O Operations). Pensad en un acceso a disco o en una consulta a
servidor.

Además, en las llamadas asíncronas, la respuesta se notifica a nuestro programa, evitando que quede
bloqueado a la espera de una respuesta. Es decir, nuestro programa lanza la llamada asíncrona,
continúa su ejecución y en algún momento será notificado con la respuesta a dicha llamada.

Estudiemos los 3 patrones más comunes para el manejo de código asíncrono en Javascript:
- Callbacks.
- Promesas (azúcar sintáctico alrededor de callbacks).
- Async/await (azúcar sintáctico alrededor de promesas).
*/
// *** CALLBACKS --------------------------------------------------------------------------------
/*
El patrón mas sencillo para manejar llamadas asíncronas son los CALLBACKS, es decir, una función
que se pasa como argumento de otra (ciudadanos de primer orden). La finalidad del callback es
registrar el código que debe ser ejecutado una vez tengamos nuestra respuesta. Ejemplo:
*/
// setTimeout es una de las llamadas asíncronas más sencillas que hay:
// postpone la ejecución de un callback, como mínimo, a X segundos después.
var callback = function () { return console.log("Hello World! con retardo"); };
setTimeout(callback, 1000);
// Al ser asíncrona, nuestra aplicación sigue corriendo:
var callback = function () { return console.log("Hello World! con retardo"); };
setTimeout(callback, 1000);
console.log("No estoy bloqueada, puedo ejecutar código");
// Resultado por consola:
// > No estoy bloqueada, puedo ejecutar código
// > Hello World! con retardo
// Podríamos hacer un mock a una llamada a servidor, sirviéndonos del patrón
// de callback y usando la operación asíncrona 'setTimeout', del siguiente modo:
var getDataAsync = function (callback) {
    setTimeout(function () { return callback(43 /* Dato random */); }, // callback del setTimeout
    2343 // Tiempo random entre 1s y 3s.
    );
};
// Una posible mejora para poder randomizar el tiempo del timer y el dato devuelto
// sería la siguiente:
var randomNumber = function () { return Math.ceil(Math.random() * 100); }; // random [1-100] número
var randomTime = function () { return Math.random() * 2000 + 1000; }; // random [1000, 3000) ms
var getDataAsync = function (callback) {
    setTimeout(function () { return callback(randomNumber()); }, randomTime());
};
getDataAsync(console.log); // Ejemplo de uso.
// *** PROMESAS ---------------------------------------------------------------------------------
/*
Una promesa es un objeto que representa el resultado de una operación asíncrona. Este resultado
podría estar disponible ahora o en el futuro. Una promesa puede tener los siguientes estados:
- A la espera de respuesta -> PENDING
- Finalizada -> SETTLED. En este caso, puede terminar con 2 estados:
   - Operación completada con éxito -> FULFILLED or RESOLVED
   - Operación rechazada con fallo o error -> REJECTED

Las promesas se basan en callbacks pero son una evolución de éstos, una mejora, que añade azúcar
sintáctico para un mejor manejo.

EJEMPLO: *Analogía de la pizza y el beeper*
*/
// *** CONSUMIENDO PROMESAS
/*
Cuando llamamos a una función asíncrona implementada con Promesas, nos devolverá inmediatamente un
objeto promesa como garantía de que la operación asíncrona se ha puesto en marcha y finalizará en
algún momento, ya sea con éxito o con fallo.
Una vez que tengamos el objeto promesa en nuestro poder, lo usamos para registrar 2 callbacks:
- uno para indicar 'que se debe hacer en caso de que todo vaya bien' (resolución de la promesa o
  resolve).
- otro para indicar 'que hacer en caso de fallo' (rechazo de la promesa o reject).
*/
fetch("https://api.github.com/users/lemoncode")
    .then(function (response) { return console.log(response); })
    .catch(function (error) { return console.error(error); });
/*
Encadenando promesas. El resolveCallback de una promesa, podría devolver otra promesa, en cuyo caso
pueden encadenarse. Solo será necesario especificar un rejectCallback (un único catch()) para
cualquiera de las promesas encadenadas.
*/
fetch("https://api.github.com/users/lemoncode")
    .then(function (response) { return response.json(); })
    .then(function (data) { return console.log(data); }) // Muestra el resultado de la promesa `response.json()`
    .catch(function (error) { return console.error(error); });
// *** CREANDO PROMESAS
/*
Una promesa se crea instanciando un nuevo objeto Promise. En el momento de la creación, en el
constructor, debemos especificar un callback que contenga la carga de la promesa, aquello que la
promesa debe hacer.
Este callback nos provee de dos argumentos: resolveCallback y rejectCallback. Te suenan, ¿verdad?
Son los dos mismos callbacks que se registrarán al consumir la promesa. De este modo, depende de ti
como desarrollador llamar a resolveCallback y rejectCallback cuando sea necesario para señalizar
que la promesa ha sido completada con éxito o con fallo.
*/
// Modifiquemos el ejemplo anterior en el que haciamos un mock de llamada a servidor para adaptarlo
// al patrón de promesas (promise flavor):
var getDataWithPromise = function () {
    return new Promise(function (resolve, _reject) {
        getDataAsync(resolve);
    });
};
// ⚠ OPCIONALMENTE podríamos manejar de forma explícita la ejecución dentro de la promesa con un try
// catch, aunque NO ES NECESARIO obligatoriamente:
// - Si no ponemos el try..catch, la promesa nos envolverá la ejecución con uno por defecto y lo
// redirigirá por el 'reject' callback si se diese un error.
// - Si lo ponemos explícitamente, podremos nosotros mismos manejar y adornar dicho error antes de
// pasarlo por el reject.
var getDataWithPromise = function () {
    return new Promise(function (resolve, reject) {
        try {
            // throw new Error("Servidor no pudo procesar la petición"); // Probar el catch()
            getDataAsync(resolve);
        }
        catch (error) {
            reject(error);
        }
    });
};
// Su utilización sería:
getDataWithPromise()
    .then(function (data) { return console.log(data); })
    .catch(function (error) { return console.log("ERROR CAPTURADO: ".concat(error)); });
// *** MANEJANDO MÚLTIPLES PROMESAS 
// Modifiquemos la función anterior ligeramente para, antes de resolver la promesa, loguear el dato
// por la consola.
var getDataWithPromise = function (autolog) {
    if (autolog === void 0) { autolog = true; }
    return new Promise(function (resolve, _reject) {
        getDataAsync(function (data) {
            if (autolog)
                console.log(data);
            resolve(data);
        });
    });
};
// Promise Race: devuelve una nueva promesa que se resuelve con el resultado o rechazo de la 
// primera promesa que termine:
Promise.race([
    getDataWithPromise(),
    getDataWithPromise(),
    getDataWithPromise(),
    getDataWithPromise(),
    getDataWithPromise(),
]).then(function (winner) { return console.log("And the winner is ...", winner); });
// Promise All: devuelve una nueva promesa que se resuelve con el array de resultados de todas las
// promesas de entrada. Por tanto se resolverá cuando todas las promesas se completen. Si alguna
// promesa es rechazada, entonces Promise.all también se rechaza.
// Por tanto espera a que todas se cumplan o al primer rechazo. El array de resultados preserva 
// el mismo orden que el array de promesas de entrada.
Promise.all([
    getDataWithPromise(),
    getDataWithPromise(),
    getDataWithPromise(),
    getDataWithPromise(),
    getDataWithPromise(),
]).then(function (result) { return console.log("And the result is ...", result); });
// *** ASYNC / AWAIT -----------------------------------------------------------------------------
/*
Las promesas, al igual que los callbacks, pueden llegar a ser tediosas cuando se anidan y se
requieren más y más .then(). Async / Await son 2 palabras clave que surgieron para simpificar el
manejo de las promesas. Son azúcar sinctáctico para reducir el anidamiento y manejar código
asíncrono como si de código síncrono se tratara.
*/
var getDataWithSugar = function () { return __awaiter(_this, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getDataWithPromise(false)];
            case 1:
                data = _a.sent();
                return [2 /*return*/, data];
        }
    });
}); };
// Su utilización sería:
getDataWithSugar()
    .then(function (data) { return console.log(data); })
    .catch(function (error) { return console.log("ERROR CAPTURADO: ".concat(error)); });
// [OPCIONAL] Versión con manejo de errores:
var getDataWithSugar = function () { return __awaiter(_this, void 0, void 0, function () {
    var data_1, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, getDataWithPromise()];
            case 1:
                data_1 = _a.sent();
                return [2 /*return*/, data_1];
            case 2:
                e_1 = _a.sent();
                throw new Error("ERROR LANZADO: ".concat(e_1));
            case 3: return [2 /*return*/];
        }
    });
}); };
// Manejo de Múltiples Promesas con Async / Await
// OPCION 1. Las promesas se lanzan y se esperan secuencialmente OJO!
var getManyDataWithSugar = function () { return __awaiter(_this, void 0, void 0, function () {
    var data1, data2, data3, data4, data5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getDataWithPromise()];
            case 1:
                data1 = _a.sent();
                return [4 /*yield*/, getDataWithPromise()];
            case 2:
                data2 = _a.sent();
                return [4 /*yield*/, getDataWithPromise()];
            case 3:
                data3 = _a.sent();
                return [4 /*yield*/, getDataWithPromise()];
            case 4:
                data4 = _a.sent();
                return [4 /*yield*/, getDataWithPromise()];
            case 5:
                data5 = _a.sent();
                return [2 /*return*/, [data1, data2, data3, data4, data5]];
        }
    });
}); };
getManyDataWithSugar().then(console.log);
// OPCIÓN 2. Lanzamos todas las promesas primero, y hacemos la espera de todas a la vez, al estilo
// de Promise.all().
var getManyDataWithSugar = function () { return __awaiter(_this, void 0, void 0, function () {
    var promise1, promise2, promise3, promise4, promise5, data1, data2, data3, data4, data5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                promise1 = getDataWithPromise();
                promise2 = getDataWithPromise();
                promise3 = getDataWithPromise();
                promise4 = getDataWithPromise();
                promise5 = getDataWithPromise();
                return [4 /*yield*/, promise1];
            case 1:
                data1 = _a.sent();
                return [4 /*yield*/, promise2];
            case 2:
                data2 = _a.sent();
                return [4 /*yield*/, promise3];
            case 3:
                data3 = _a.sent();
                return [4 /*yield*/, promise4];
            case 4:
                data4 = _a.sent();
                return [4 /*yield*/, promise5];
            case 5:
                data5 = _a.sent();
                return [2 /*return*/, [data1, data2, data3, data4, data5]];
        }
    });
}); };
getManyDataWithSugar().then(console.log);
// Posible implementación de Promise.race usando async await
var myCustomPromiseRace = function (promises) {
    return new Promise(function (resolve, reject) {
        promises === null || promises === void 0 ? void 0 : promises.forEach(function (promise) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = resolve;
                        return [4 /*yield*/, promise];
                    case 1:
                        _a.apply(void 0, [_b.sent()]);
                        return [2 /*return*/];
                }
            });
        }); });
    });
};
