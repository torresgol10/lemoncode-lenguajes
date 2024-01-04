console.log("Aplanando arrays")
const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

const aplanandoArrays = <T>(sample: T[]): T[] => {
    return sample.flat(20) as T[]
} 

console.log(aplanandoArrays(sample))