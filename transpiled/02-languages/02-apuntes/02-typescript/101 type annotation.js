///-- ANOTACIÓN DE TIPOS **************************************************************************
// Para anotar tipos con Typescript usamos los puntos (:), como si del valor de una propiedad se
// tratase. Asi pues, para tipar una variable, añadimos su anotación de tipo a continuación del
// nombre de la variable:
var city = "Málaga";
var num = 3;
// TS hace chequeo de tipos al transpilar y nos informa de errores y advertencias. Además, si
// tenemos instalado un linter para TS como tslint, este chequeo se realiza en vivo y nos avisa de
// posibles errores en nuestro editor de código.
var text = 3; // [ts] Type '3' is not assignable to type 'string'
var pi = "3.1415"; // [ts] type '"3.1415"' is not assignable to type 'number'
text = "reassigned"; // [ts] Cannot assign 'text' because it is a constant or a read-only property
// TIPOS BÁSICOS
// *** Boolean
var fake = true;
// *** Number
var integer = 13; // 13
var float = 13.13; // 13.13
var hex = 0xd; // 13
var binary = 13; // 13
var octal = 13; // 13
// *** String
var phrase = "¿Qué tiempo hace?";
phrase = "No muy bueno";
phrase = "Dan lluvia en ".concat(city);
// *** Array
// Se puede anotar su tipo con 2 variantes, los corchetes [] para expresar array o mediante el tipo
// genérico Array especializado al tipo concreto de array.
var coins = [1, 2, 0.5];
var words = [];
words.push("hello");
words.push("world");
words.push({}); // [ts] Argument of type '{}' is not assignable to parameter of type 'string'
// *** Tuple
// Array con tipos heterogéneos.
var quantity = [5, "pieces"];
console.log(quantity[1].toUpperCase());
console.log(quantity[0].toUpperCase());
//                      ^^^^^^^^^^^~~ [ts] Property 'toUpperCase' does not exists in type 'number'
// *** Enum
// Nuevo tipo en TypeScript para enumerados. Los enumerados no son más que alias más amigables para
// tipos numéricos. Internamente, por tanto, almacenamos un entero por defecto:
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Lunes"] = 0] = "Lunes";
    DiaSemana[DiaSemana["Martes"] = 1] = "Martes";
    DiaSemana[DiaSemana["Miercoles"] = 2] = "Miercoles";
    DiaSemana[DiaSemana["Jueves"] = 3] = "Jueves";
    DiaSemana[DiaSemana["Viernes"] = 4] = "Viernes";
    DiaSemana[DiaSemana["Sabado"] = 5] = "Sabado";
    DiaSemana[DiaSemana["Domingo"] = 6] = "Domingo";
})(DiaSemana || (DiaSemana = {}));
var dia = DiaSemana.Miercoles;
console.log(dia); // 2
// Si no indico nada, por defecto el enum se enumera con un índice entero base 0. Aunque puedo
// indicar, si deseo, el primer índice, o incluso todos:
var DiaSemanaUSA;
(function (DiaSemanaUSA) {
    DiaSemanaUSA[DiaSemanaUSA["Lunes"] = 1] = "Lunes";
    DiaSemanaUSA[DiaSemanaUSA["Martes"] = 2] = "Martes";
    DiaSemanaUSA[DiaSemanaUSA["Miercoles"] = 3] = "Miercoles";
    DiaSemanaUSA[DiaSemanaUSA["Jueves"] = 4] = "Jueves";
    DiaSemanaUSA[DiaSemanaUSA["Viernes"] = 5] = "Viernes";
    DiaSemanaUSA[DiaSemanaUSA["Sabado"] = 6] = "Sabado";
    DiaSemanaUSA[DiaSemanaUSA["Domingo"] = 0] = "Domingo";
})(DiaSemanaUSA || (DiaSemanaUSA = {}));
var diaUSA = DiaSemanaUSA.Domingo;
console.log(diaUSA); // 0
// Los enum pueden usarse como diccionarios string <-> number.
var Release;
(function (Release) {
    Release[Release["Beta"] = 0.1] = "Beta";
    Release[Release["ProductLaunch"] = 1] = "ProductLaunch";
    Release[Release["ImprovedSupport"] = 1.4] = "ImprovedSupport";
    Release[Release["NewYearPackage"] = 2] = "NewYearPackage";
})(Release || (Release = {}));
var rel = Release.ImprovedSupport;
console.log(rel); // 1.4
var relName = Release[1.4];
var relName1 = Release[Release.ImprovedSupport];
console.log(relName); // ImprovedSupport
// También podemos crear enumerados con valores string
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["JSON"] = "application/json";
    MediaTypes["XML"] = "application/xml";
    MediaTypes["PLAIN"] = "text/plain";
})(MediaTypes || (MediaTypes = {}));
var jsonMedia = MediaTypes.JSON;
console.log(jsonMedia); // "application/json"
// ⚠ El identificador de un enumerado cuyo valor es un string no se puede
// obtener mediante su valor
var medName = MediaTypes[MediaTypes.JSON]; // undefined
// PREGUNTA: ¿Alguno sabe por qué no podemos hacer "reverse-mapping"
// si el valor es string?
// SOLUCIÓN:
/*
  Las propiedades de los objetos son strings, por lo que si se hace un
  "reverse-mapping" podemos machacar accidentalmente el valor de otra key.
  Ejemplo:

  enum MediaTypes {
    JSON = "application/json",
    XML = "application/xml",
    PLAIN = "text/plain",
    OTHER = "PLAIN" // casualmente tiene un valor con la misma clave
  }

  Si existiese el reverse-mapping con strings obtendríamos algo parecido a esto:

  const MediaTypes = {};
  MediaTypes["JSON"] = "application/json";
  MediaTypes["application/json"] = "JSON";
  MediaTypes["XML"] = "application/xml";
  MediaTypes["application/xml"] = "XML";
  MediaTypes["PLAIN"] = "text/plain"; // (1)
  MediaTypes["text/plain"] = "PLAIN";
  MediaTypes["OTHER"] = "PLAIN";
  MediaTypes["PLAIN"] = "OTHER"; // ⚠ Hemos sobreescrito la propiedad "PLAIN" de (1)
*/
// Si utilizamos la palabra clave `const` delante de `enum` TypeScript no creará el objeto y
// reemplazará las referencias por valores hardcodeados.
// *** Void
// Es justo lo contrario de "any", la ausencia de cualquier tipo. Mientras
// que "any" puede ser cualquier cosa, "void" no puede ser nada. Su uso más
// habitual es como valor de retorno en funciones que no devuelven nada.
function noReturn() {
    console.log("I am not going to return anything");
}
// Void es equivalente a undefined
var notAssigned = undefined;
// ⚠ Veremos más en el capítulo de funciones.
// *** null y undefined
// Aunque en TS existen tanto "null" como "undefined" como tipos propios e independientes, no
// tienen mucha utilidad como tal:
var u = undefined; // Sólo puedo asignarle undefined o null.
var n = null; // Sólo puedo asignarle null o undefined.
// Sin embargo, si que se utilizan mucho como sub-tipos del resto de tipos, es decir, que podemos
// asignarlos a cualquier otro tipo:
var nullNumb = null;
var undefString = undefined;
var whatever = undefined;
whatever = null;
// *** Object
// Representa a los tipos custom, aquellos que no son primitivos. Es decir, todo lo que no sea
// "number", "string", "boolean", "null" o "undefined".
var obj = {};
// *** Never
// Representa a valores que nunca van a ocurrir. Es un tipo abstracto útil para tipar condiciones
// como las siguientes:
// Nunca se alcanza el retorno, por tanto su tipo es never.
var throwError = function (message) {
    throw new Error(message);
};
// Nunca se alcanza el retorno, por tanto su tipo es never.
var neverEndingFunction = function () {
    while (true) { } // Infinite loop.
};
// Never suele ser empleado internamente por TS para indicar algun tipo de error.
// *** Any
// ¿Y si no sabemos que tipo es? Puede haber datos dinámicos que a priori no sepamos su tipo,
// imaginemos datos que vienen de servidor;
var getServerData = function () {
    /*¿?*/
};
var myData = getServerData();
myData = "Maybe is a string";
myData = false;
myData = {};
myData = function () { return console.log("I am a function now"); };
myData.push(3); // Ok, myData podría ser un array y por tanto .push() podría existir.
myData.toExponential(2); // Ok, myData podría ser un número y por tanto .toExponential() podría ser válido.
var falsyValues = [0, undefined, null, NaN, false];
falsyValues.push("");
// Any es potente y la vez peligroso. Nos permite 'desactivar' el chequeo
// de tipos cuando queramos. Puede ser útil si sabemos lo que hacemos pero
// también abrimos la puerta a posibles erroes. Es lo más parecido a volver
// a vanilla JS.
// *** Unknown
// Es el tipo de carácter opuesto a `any`. Podemos asignar cualquier valor a `unknown` pero a la
// hora de acceder a dicho valor tendremos que comprobar su tipo antes de poder usarlo.
var myData1 = getServerData();
myData1 = "hello"; // podemos reasignar cualquier valor, como any.
myData1.push(3); // Error: La variable es de tipo `unknown`
if (Array.isArray(myData1)) {
    // Ahora `myData1` es un array
    myData1.push(3);
}
else if (typeof myData1 === "string") {
    // Ahora `myData1` es un string
    console.log(myData1.toUpperCase());
}
else {
    // `myData1` sigue siendo `unknown`
    console.log(myData1);
}
// TYPE ASSERTION o ASEVERACIÓN DE TIPOS
// Hay veces en las que tenemos la certeza de conocer el tipo de un determinado valor, que
// Typescript no conoce. En dichos casos podemos aseverar el tipo por nosotros mismos, y decirle a
// TS, "oye, confia en mi, sé lo que hago". Volvamos al ejemplo del any:
var getData = function () {
    /*¿?*/ return "I am a string";
};
var data = getData();
// Supongamos que alguien nos garantiza que getData devuelve siempre un string. En tal caso
// podríamos indicarle a TS que se fie de nosotros y tenga fe en que es un string mediante
// un casting.
console.log(data.substring(0, 3)); // Intellisense no funciona asi, porque data es de tipo any.
console.log(data.substring(0, 3)); // Intellisense si funciona ahora
console.log(data.substring(0, 3)); // Intellisense si funciona ahora
