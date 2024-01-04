console.log("Árbol")

interface Nodo<T> {
    value: T;
    children?: Nodo<T>[];
}


const tree: Nodo<number> = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {
                    value: 3,
                },
                {
                    value: 4,
                },
            ],
        },
        {
            value: 5,
        },
    ],
};
