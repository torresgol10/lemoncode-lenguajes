// ARRAY METHODS **********************************************************
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// [MAP]
// Map es un método que realiza una iteración sobre todos los elementos de un array y devuelve
// como resultado un nuevo array aplicando sobre cada elemento una función transformadora
var getArea = function (_a) {
    var width = _a.width, height = _a.height;
    return width * height;
};
var rectangles = [
    { width: 18, height: 2 },
    { width: 10, height: 9 },
    { width: 2, height: 4 },
    { width: 8, height: 3 },
];
console.log(rectangles.map(getArea));
// Implementación imperativa de map:
var map = function (collection, transform) {
    var result = [];
    for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
        var element = collection_1[_i];
        result.push(transform(element));
    }
    return result;
};
console.log(map(rectangles, getArea));
// [FILTER]
// Filter es un método que realiza una iteración sobre todos los elementos de un array y devuelve
// como resultado un nuevo array con los elementos que devuelvan verdadero al aplicarse un predicado
// Predicado: función que devuelve un valor booleano
var hasBigArea = function (rectangle) { return getArea(rectangle) > 50; };
console.log(rectangles.filter(hasBigArea));
// Implementación imperativa de filter
var filter = function (collection, predicate) {
    var result = [];
    for (var _i = 0, collection_2 = collection; _i < collection_2.length; _i++) {
        var element = collection_2[_i];
        if (predicate(element)) {
            result.push(element);
        }
    }
    return result;
};
console.log(filter(rectangles, hasBigArea));
// [SOME]
// Some es un método que realiza una iteración sobre todos los elementos de un array y devuelve
// true si hay algún elemento al que al aplicar el predicato devuelva true
// En caso de que el array esté vacío devuelve false (ya que no hay ningún elemento al que aplicar el predicado)
var isTaller = function (_a) {
    var height = _a.height;
    return height > 5;
};
console.log(rectangles.some(isTaller));
// Implementación imperativa de some
var some = function (collection, predicate) {
    var done = false, length = collection.length;
    for (var i_1 = 0; i_1 < length && !done; i_1++) {
        done = predicate(collection[i_1]);
    }
    return done;
};
// console.log(some(rectangles, isTaller));
// [EVERY]
// Some es un método que realiza una iteración sobre todos los elementos de un array y devuelve
// true si el predicado devuelve true sobre TODOS los elementos del array
// En caso de que el array esté vacío devuelve true (verdad vacua / vacuous truth)
var hasEvenArea = function (element) { return getArea(element) % 2 === 0; };
console.log(rectangles.every(hasEvenArea));
console.log([].every(hasEvenArea));
console.log([{ width: 11, height: 3 }, { width: 2, height: 3 }].every(hasEvenArea));
// Implementación imperativa
var every = function (collection, predicate) {
    var match = true, length = collection.length;
    for (var i_2 = 0; i_2 < length && match; i_2++) {
        match = predicate(collection[i_2]);
    }
    return match;
};
console.log(every(rectangles, hasEvenArea));
console.log(every([], hasEvenArea));
console.log(every([{ width: 11, height: 3 }, { width: 2, height: 3 }], hasEvenArea));
// [CONCAT]
// Concat es un método que devuelve un nuevo array donde se le añaden todos los elementos pasados como argumento.
// En caso de que algún elemento sea un array los une sin crear arrays anidados (sólo el primer nivel)
var shape1 = { width: 11, height: 2 };
var shape2 = { width: 22, height: 3 };
var otherShapes = [
    { width: 33, height: 4 },
    { width: 44, height: 5 },
];
console.log(rectangles.concat(shape1, shape2, otherShapes));
// Implementación imperativa
var concat = function (collection) {
    var elements = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        elements[_i - 1] = arguments[_i];
    }
    var newCollection = __spreadArray([], collection, true);
    for (var _a = 0, elements_1 = elements; _a < elements_1.length; _a++) {
        var element = elements_1[_a];
        if (Array.isArray(element)) {
            for (var _b = 0, element_1 = element; _b < element_1.length; _b++) {
                var deepElement = element_1[_b];
                newCollection.push(deepElement);
            }
        }
        else {
            newCollection.push(element);
        }
    }
    return newCollection;
};
console.log(concat(rectangles, shape1, shape2, otherShapes));
// [REDUCE]
// Reduce es una función recibe un reductor y, opcionalmente un valor inicial, que aplica por cada elemento del array
// dicho reductor junto con el valor inicial. Básicamente su función es de convertir un conjunto de elementos
// en uno más simple. En caso de no pasar el valor inicial el primer elemento se convierte en valor inicial
var sumAllAreas = function (total, rectangle) { return total + getArea(rectangle); };
console.log(rectangles.reduce(sumAllAreas, 0));
// Implementación imperativa
function reduce(collection, reducer, initialValue) {
    var i = 0;
    var accumulator = arguments.length >= 3 ? initialValue : (i++, collection[0]);
    for (var length_1 = collection.length; i < length_1; i++) {
        accumulator = reducer(accumulator, collection[i]);
    }
    return accumulator;
}
;
console.log(reduce([1, 2, 3, 4], function (a, b) { return a + b; }));
// [REDUCERIGHT]
// ReduceRight no es más que la implementación de Reduce donde realiza la iteración desde el último hasta el primero
// en vez de desde el primero hasta el último
console.log(rectangles.reduceRight(sumAllAreas, 0));
// Implementación imperativa
function reduceRight(collection, reducer, initialValue) {
    var i = collection.length;
    var accumulator = arguments.length >= 3 ? initialValue : collection[--i];
    while (i > 0) {
        accumulator = reducer(accumulator, collection[--i]);
    }
    return accumulator;
}
;
console.log(reduceRight(rectangles, sumAllAreas, 0));
// Aunque a simple vista parezca una tontería el iterar de derecha a izquierda, dependiendo del reductor que usemos
// el orden es importante e incluso el valor inicial
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(oneToTen.reduceRight(function (a, b) { return a + b; }, 0));
console.log(reduceRight(oneToTen, function (a, b) { return a + b; }, 0));
console.log(oneToTen.reduceRight(function (a, b) { return a + b; }));
console.log(reduceRight(oneToTen, function (a, b) { return a + b; }));
console.log(oneToTen.reduceRight(function (a, b) { return a - b; }, 0));
console.log(reduceRight(oneToTen, function (a, b) { return a - b; }, 0));
console.log(oneToTen.reduceRight(function (a, b) { return a - b; }));
console.log(reduceRight(oneToTen, function (a, b) { return a - b; }));
// El método reduce es tan flexible que podemos utilizarlo para sustituir cualquier método de array:
var mapReduce = function (collection, transform) {
    return collection.reduce(function (newCollection, element) { return (newCollection.push(transform(element)), newCollection); }, []);
};
console.log(mapReduce(rectangles, getArea));
var filterReduce = function (collection, predicate) { return collection.reduce(function (newCollection, element) {
    if (predicate(element))
        newCollection.push(element);
    return newCollection;
}, []); };
console.log(filterReduce(rectangles, hasBigArea));
var concatReduce = function (collection) {
    var elements = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        elements[_i - 1] = arguments[_i];
    }
    return elements.reduce(function (newCollection, element) {
        if (Array.isArray(element)) {
            for (var _i = 0, element_2 = element; _i < element_2.length; _i++) {
                var deepElement = element_2[_i];
                newCollection.push(deepElement);
            }
        }
        else {
            newCollection.push(element);
        }
        return newCollection;
    }, __spreadArray([], collection, true));
};
console.log(concatReduce(rectangles, shape1, shape2, otherShapes));
