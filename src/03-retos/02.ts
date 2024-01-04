console.log('Acceso en profundidad')

const myObject = {
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

const deepGet = (myObject: object, ...rest: string[]) => {
    if (rest === undefined) return myObject

    for (const key of rest) {
        if (!myObject.hasOwnProperty(key)) return undefined;
        myObject = myObject[key];
    }

    return myObject;
}


console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject));  // {a: 1, b: {...}}
