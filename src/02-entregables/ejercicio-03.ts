console.log("************** DELIVERABLE 03 *********************");

const clone = function(source: object): object {
    return { ...source }
}

console.log("Clone: ", clone({ id: 0, name: "ivan" }))

const merge = function(source: object, target: object): object {
    return { ...target, ...source}
}

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

console.log("Merge: ", merge(a, b)); 