console.log("Memoization")


let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string =>
    (count++, `${text} `.repeat(repetitions).trim())

const memoize = <T>(myfunction) => {
    const memoize: T[] = []

    return (...rest: T[]): string => {
        const key = rest.join("-")
        if (!memoize[key]) memoize[key] = myfunction(...rest)
        
        return memoize[key]
    }
};

const memoizedGreet = memoize(repeatText);

console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(memoizedGreet(1, "pam"));   // pam
console.log(memoizedGreet(3, "chun"));  // chun chun chun
console.log(count);                     // 2