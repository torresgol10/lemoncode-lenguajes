// RECURSIVIDAD **********************************************************
// Concepto:
/*
function recursive() {
  if(casoBaseOFinDelProblema) {
    return resultado;
  }

  return recursive(siguientePequeñoProblema);
}
*/
// Implementando funciones iteradoras usando recursividad:
// Función sumatoria
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Imperativa
var imperativeSum = function (collection) {
    var result = 0;
    for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
        var element = collection_1[_i];
        result += element;
    }
    return result;
};
console.log(imperativeSum(numbers));
// Declarativa
var declarativeSum = function (collection) { return collection.reduce(function (acc, val) { return acc + val; }); };
console.log(declarativeSum(numbers));
// Recursiva
var recursiveSum1 = function (arr) {
    if (!arr.length)
        return 0;
    var head = arr[0], tail = arr.slice(1);
    return head + recursiveSum3(tail);
};
var recursiveSum2 = (function () {
    var innerRecursiveSum = function (collection, index) {
        if (index < 0)
            return 0;
        return collection[index] + innerRecursiveSum(collection, index - 1);
    };
    return function (collection) { return innerRecursiveSum(collection, collection.length - 1); };
})();
var recursiveSum3 = (function () {
    var innerRecursiveSum = function (collection, index) {
        if (index >= collection.length)
            return 0;
        return collection[index] + innerRecursiveSum(collection, index + 1);
    };
    return function (collection) { return innerRecursiveSum(collection, 0); };
})();
console.log(recursiveSum1(numbers));
console.log(recursiveSum2(numbers));
console.log(recursiveSum3(numbers));
// Map imperativo
var imperativeMap = function (collection, transform) {
    var result = [];
    for (var _i = 0, collection_2 = collection; _i < collection_2.length; _i++) {
        var element = collection_2[_i];
        result.push(transform(element));
    }
    return result;
};
// Map recursivo
var recursiveMap = (function () {
    var innerRecursiveMap = function (collection, transform, index, newCollection) {
        if (index >= collection.length)
            return newCollection;
        newCollection.push(transform(collection[index]));
        return innerRecursiveMap(collection, transform, index + 1, newCollection);
    };
    return function (collection, transform) { return innerRecursiveMap(collection, transform, 0, []); };
})();
var tripleIt = function (num) { return num * 3; };
console.log(imperativeMap(numbers, tripleIt));
console.log(recursiveMap(numbers, tripleIt));
// Filter imperativo
var imperativeFilter = function (collection, predicate) {
    var result = [];
    for (var _i = 0, collection_3 = collection; _i < collection_3.length; _i++) {
        var element = collection_3[_i];
        if (predicate(element)) {
            result.push(element);
        }
    }
    return result;
};
var recursiveFilter = (function () {
    var innerRecursiveFilter = function (collection, predicate, index, newCollection) {
        if (index >= collection.length)
            return newCollection;
        var element = collection[index];
        if (predicate(element))
            newCollection.push(element);
        return innerRecursiveFilter(collection, predicate, index + 1, newCollection);
    };
    return function (collection, predicate) { return innerRecursiveFilter(collection, predicate, 0, []); };
})();
var isEven = function (num) { return num % 2 === 0; };
console.log(imperativeFilter(numbers, isEven));
console.log(recursiveFilter(numbers, isEven));
// factorial imperativo
var imperativeFactorial = function (num) {
    var result = 1;
    for (var i_1 = 1; i_1 <= num; i_1++) {
        result *= i_1;
    }
    return result;
};
var recursiveFactorial = (function () {
    var innerRecursiveFactorial = function (num, index) {
        if (index > num)
            return 1;
        return index * innerRecursiveFactorial(num, index + 1);
    };
    return function (num) { return innerRecursiveFactorial(num, 1); };
})();
console.log(recursiveFactorial(10));
console.log(imperativeFactorial(10));
// obtener un rango imperativo
var imperativeRange = function (from, to) {
    var result = [];
    while (from < to - 1) {
        result.push(++from);
    }
    return result;
};
// obtener rango declarativo
var declarativeRange = function (from, to) { return Array.from({ length: to - from - 1 }, function (_, i) { return i + from + 1; }); };
// obtener rango recursivo
var recursiveRange = (function () {
    var recursiveInnerRange = function (from, to, acc) {
        if (from >= to - 1)
            return acc;
        acc.push(++from);
        return recursiveInnerRange(from, to, acc);
    };
    return function (from, to) { return recursiveInnerRange(from, to, []); };
})();
var recursiveRangeAccumulator = (function () {
    var recursiveInnerRange = function (from, to) {
        if (from >= to - 1)
            return [];
        return [from + 1].concat(recursiveInnerRange(from + 1, to));
    };
    return function (from, to) { return recursiveInnerRange(from, to); };
})();
console.log(imperativeRange(2, 9));
console.log(declarativeRange(2, 9));
console.log(recursiveRange(2, 9));
console.log(recursiveRangeAccumulator(2, 9));
