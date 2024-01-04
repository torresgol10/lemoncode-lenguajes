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
console.log("************** DELIVERABLE 03 *********************");
var clone = function (source) {
    return __assign({}, source);
};
console.log("Clone: ", clone({ id: 0, name: "ivan" }));
var merge = function (source, target) {
    return __assign(__assign({}, target), source);
};
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };
console.log("Merge: ", merge(a, b));
