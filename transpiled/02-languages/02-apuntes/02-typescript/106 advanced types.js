///-- TIPOS AVANZADOS *****************************************************************************
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
var javi = {
    id: 238943,
    name: "Javier",
    surname: "Calzado",
    email: "javi.calzado@lemoncode.net",
};
var updateUser = function (previousState, update) { return (__assign(__assign({}, previousState), update)); };
console.log(updateUser(javi, { name: "Francisco Javier" }));
var ab = { a: "A", b: "B" };
var abc = { a: 1 }; // Ni number ni string
// -- Caso Práctico --
var compose = function (a, b) { return (__assign(__assign({}, a), b)); };
var cat = compose({ type: "feline" }, { skill: "hunting" });
var pigeon = compose({ wings: true }, { type: "bird" });
console.log(cat.type);
console.log(pigeon.skill); // TS error: Property 'skill' is missing.
// -- Caso Práctico --
// Por ejemplo, sin unión, tendriamos que recurrir al any para admitir argumentos de tipo string
// o númerico:
var saySomething = function (message) { return console.log(message); };
// Pero con la unión, restringimos el argumento a los tipos deseados:
var saySomethingTyped = function (message) { return console.log(message); };
saySomethingTyped(true); // TS error: Argument of type 'true' is not assignable
if (resource.framerate) {
} // TS error: Property 'framerate' does not exist on type 'AudioResource'
if (resource.album) {
} // TS error: Property 'album' does not exist on type 'VideoResource'
// ⚠ El acceso a estas propiedades causa un error porque tenemos que DESAMBIGUAR el tipo.
// Para ello recurrimos a las GUARDAS. Podemos construirlas de distintas maneras:
// -- Guardas Definidas por el Usuario
// Estas guardas se usan cuando queremos desambiguar objetos. Una forma podría ser aplicando
// "duck typing" mediante el operador "in" para comprobar de forma segura que una propiedad existe
// en un objeto:
if ("framerate" in resource) {
    console.log("Video resource:", resource.framerate);
}
else if ("album" in resource) {
    console.log("Audio resource:", resource.album);
}
// Otra forma más habitual para hacer el "duck typing" consiste en hacer uso de la aseveración de
// tipos para discriminar entre uno u otro:
if (resource.framerate !== undefined) {
    console.log("Video resource:", resource.framerate);
}
else if (resource.album !== undefined) {
    console.log("Audio resource:", resource.album);
}
// Hasta aqui bien, pero hemos tenido que 'engañar' a intellisense para que funcione correctamente.
// Una forma más eficiente para este tipo de guardas sería haciendo uso de de una funcion especial
// de chequeo que devuelve un "type predicate". Este tipo de funciones también son útiles cuando
// queremos desambiguar tipos usando comprobaciones en tiempo de ejecución mediante alguna
// computación:
var isVideoResource = function (resource) { return "framerate" in resource; };
if (isVideoResource(resource)) {
    console.log("Video resource:", resource.framerate);
}
else {
    console.log("Audio resource:", resource.album);
}
// -- Guardas con "typeof"
var randomBool = function () { return Math.random() >= 0.5; };
// Cuando queremos desambiguar tipos primitivos, podemos recurrir al operador "typeof":
var value = randomBool() ? "hello" : 13;
// En este ejemplo utilizaremos el operador `as` ya que TypeScript es lo suficientemente listo
// para entender que acabamos de asignar un valor numérico devuelto por `Math.random()`
if (typeof value === "number") {
    console.log("It is a number", value.toFixed(2));
}
else {
    console.log("It is a number", value.toUpperCase());
}
// -- Guardas con "instanceof"
// Cuando queremos desambiguar instancias de clases, es habitual recurrir al operador "instanceof":
var giveMeSomeInstance = function () {
    return randomBool() ? new Number(13) : new String("hello");
};
var someInstance = giveMeSomeInstance();
if (someInstance instanceof Number) {
    console.log("I'ts a Number instance");
}
else {
    console.log("It's  a String");
}
var day = "sunday"; // TS error: '"sunday"' is not assignable to type 'LabourDay'
var throwDice = function () {
    return Math.ceil(Math.random() * 6);
    // return 6; // Dado trucado MUAHAHAHAHA.
};
// -- Caso Práctico --
var showProps = function (obj) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    keys.forEach(function (key) { return console.log(obj[key]); });
};
var dev = {
    type: "frontend",
    languages: ["js", "css", "html"],
    senior: true,
};
showProps(dev, "type", "languages"); // Check intellisense!;
// Función que devolverá una nueva copia del objeto aplicando  las transformaciones en
// las propiedades
var evolve = function (transformations, obj) {
    return Object.entries(obj).reduce(function (result, _a) {
        var key = _a[0], value = _a[1];
        result[key] = key in transformations ? transformations[key](value) : value;
        return result;
    }, {});
};
var product = {
    name: '  macbook Pro 16" ',
    price: 2638,
};
// Transformaciones:
var formatString = function (str) {
    str = str.trim();
    return str[0].toUpperCase() + str.slice(1);
};
var applyIVA = function (price) { return price * 1.21; };
// Aplicación
var updatedProduct = evolve({ name: formatString, price: applyIVA }, product);
console.log(updatedProduct);
var palette = "black"; // Only black or grey allowed.
var myTree = {
    value: 1,
    children: [{ value: 2 }, { value: 3, children: [{ value: 4 }] }],
};
var classList;
classList.name;
classList.next.name;
classList.next.next.name;
var myRecursiveArray = [
    1,
    2,
    [3, [4, 5], 2],
    [1, [3, [4]]],
];
var myTreeMM = ["hello", [["world"], "!"]];
