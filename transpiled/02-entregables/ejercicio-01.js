var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("************** DELIVERABLE 01 *********************");
var parameter = [1, 2, 3, 4, 5];
var head = function (list) {
    var firts = (list !== null && list !== void 0 ? list : [])[0];
    return firts;
};
console.log("Head: ".concat(head(parameter)));
var tail = function (list) {
    var _a = list !== null && list !== void 0 ? list : [], rest = _a.slice(1);
    return rest;
};
console.log("Tail: ".concat(tail(parameter)));
var init = function (list) { return __spreadArray([], list.slice(0, list.length - 1), true); };
console.log("Init: ".concat(init(parameter)));
var last = function (list) {
    var _a = list !== null && list !== void 0 ? list : [], _b = list.length - 1, last = _a[_b];
    return last;
};
console.log("Last: ".concat(last(parameter)));
