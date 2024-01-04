var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("************** DELIVERABLE 02 *********************");
var concat = function () {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var result = [];
    for (var _a = 0, rest_1 = rest; _a < rest_1.length; _a++) {
        var item = rest_1[_a];
        result = __spreadArray(__spreadArray([], result, true), item, true);
    }
    return result;
};
console.log(concat([0, 1], [2, 3]));
