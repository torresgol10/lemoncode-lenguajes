console.log('Acceso en profundidad');
var myObject = {
    a: 1,
    b: {
        c: null,
        d: {
            e: 3,
            f: {
                g: "bingo",
            }
        }
    }
};
var deepGet = function (myObject) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    if (rest === undefined)
        return myObject;
    for (var _a = 0, rest_1 = rest; _a < rest_1.length; _a++) {
        var key = rest_1[_a];
        if (!myObject.hasOwnProperty(key))
            return undefined;
        myObject = myObject[key];
    }
    return myObject;
};
console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject)); // {a: 1, b: {...}}
