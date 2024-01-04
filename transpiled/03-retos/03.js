console.log("Aplanando arrays");
var sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
var aplanandoArrays = function (sample) {
    return sample.flat(20);
};
console.log(aplanandoArrays(sample));
