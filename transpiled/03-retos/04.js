console.log("Memoization");
var count = 0; // Comprobacion de nº de ejecuciones
var repeatText = function (repetitions, text) {
    return (count++, "".concat(text, " ").repeat(repetitions).trim());
};
var memoize = function (myfunction) {
    var memoize = [];
    return function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        var key = rest.join("-");
        if (!memoize[key])
            memoize[key] = myfunction.apply(void 0, rest);
        return memoize[key];
    };
};
var memoizedGreet = memoize(repeatText);
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(count); // 2
