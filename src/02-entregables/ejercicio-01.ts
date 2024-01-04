console.log("************** DELIVERABLE 01 *********************");

const parameter = [1, 2, 3, 4, 5]

const head = <T>(list: T[]): T => {
    const [firts] = list ?? []
    return firts
};

console.log(`Head: ${head(parameter)}`)

const tail = <T>(list: T[]): T[] => {
    const [, ...rest] = list ?? []
    return rest
};

console.log(`Tail: ${tail(parameter)}`)

const init = <T>(list: T[]): T[] => [...list.slice(0, list.length - 1)];

console.log(`Init: ${init(parameter)}`)

const last = <T>(list: T[]): T => {
    const { [list.length - 1]: last } = list ?? []
    return last
};

console.log(`Last: ${last(parameter)}`)
