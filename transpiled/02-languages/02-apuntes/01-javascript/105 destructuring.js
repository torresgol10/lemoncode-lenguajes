///-- DESTRUCTURING ******************************************************************************
var _a, _b;
// Destructuring es una técnica rápida para asignar propiedades de objetos a variables, o items
// de un array a variables.
// "DESTRUCTURING" SOBRE OBJETOS
// Ejemplo a mano, sin "destructuring":
var student = {
    name: "Evan",
    surname: "Smith",
    country: "USA",
};
var name = student.name;
var surname = student.surname;
console.log(name); // "Evan"
console.log(surname); // "Smith"
// Pero con "destructuring" podemos asignar propiedades ya existentes a variables de forma directa,
// en una línea:
var student = {
    name: "Evan",
    surname: "Smith",
    country: "USA",
};
var name = student.name, surname = student.surname;
console.log(name); // "Evan"
console.log(surname); // "Smith"
// La de arriba es una forma abreviada a la notación clave-valor, por lo que es equivalente a
// hacer:
var student = {
    name: "Evan",
    surname: "Smith",
    country: "USA",
};
var name = student.name, surname = student.surname;
console.log(name); // "Evan"
console.log(surname); // "Smith"
// Aunque si queremos, también podemos reemplazar el nombre de las variables donde vamos asignando
// nuestras propiedades:
var student = {
    name: "Evan",
    surname: "Smith",
    country: "USA",
};
var studentName = student.name, studentSurname = student.surname;
console.log(studentName); // "Evan"
console.log(studentSurname); // "Smith"
// También podemos hacer un "destructuring" profundo, es decir, extraer propiedades de objetos
// anidados:
var student = {
    name: "Evan",
    surname: "Smith",
    country: {
        id: 21,
        name: "Spain",
        iso3: "SPA",
    },
};
var name = student.name, _c = student.country, countryName = _c.name, iso3 = _c.iso3;
console.log(name); // "Evan"
console.log(countryName); // "Spain"
console.log(iso3); // "SPA"
// Incluso podemos aplicar "destructuring" sobre objetos que se pasan como argumento de una
// función:
var student = {
    name: "Evan",
    surname: "Smith",
    country: "USA",
};
var getName = function (_a) {
    var name = _a.name;
    return name;
};
console.log(getName(student)); // "Evan"
// "DESTRUCTURING" SOBRE ARRAYS
// Ejemplo a mano, sin "destructuring":
var students = ["Alan", "Evan", "Ana"];
var first = students[0];
var second = students[1];
var third = students[2];
var fourth = students[3];
console.log(first); // "Alan"
console.log(second); // "Evan"
console.log(third); // "Ana"
console.log(fourth); // undefined
// Pero con "destructuring" podemos asignar elementos existentes en el array a variables de forma
// directa, en una línea:
// ⚠ El orden en la asignación se mantiene
var students = ["Alan", "Evan", "Ana"];
var first = students[0], second = students[1], third = students[2], fourth = students[3];
console.log(first); // "Alan"
console.log(second); // "Evan"
console.log(third); // "Ana"
console.log(fourth); // undefined
// Podemos omitir elementos intermedios usando la coma (,)
var students = ["Alan", "Evan", "Ana"];
var third = students[2];
console.log(third); // "Ana"
// Se puede aplicar "destructuring" sobre arrays pasados como argumento de una función:
var students = ["Alan", "Evan", "Ana"];
var getSecond = function (_a) {
    var second = _a[1];
    return second;
};
console.log(getSecond(students)); // "Evan"
// También se puede aplicar "destructuring" profundo en arrays bidimensionales.
var matrix = [
    [0, 0, 0],
    [0, 10, 0],
    [0, 0, 0],
];
var _d = matrix[1], center = _d[1];
console.log(center); // 10;
// "DESTRUCTURING" PARA REASIGNAR VARIABLES
// Se pueden hacer cosas bastante bizarras con el destructuring, como por ejemplo hacer un swap de
// variables de una sola vez. Veamos:
var a = "a";
var b = "b";
// Swap clásico, nos tenemos que apoyar en variables auxiliares
var temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);
// Sin embargo, recurriendo al destrúcturing, se puede hacer un swap inmediato, en una sola línea:
_a = [b, a], a = _a[0], b = _a[1];
console.log(a);
console.log(b);
// El equivalente con destructuring de objetos podría ser:
(_b = { a: a, b: b }, b = _b.a, a = _b.b);
