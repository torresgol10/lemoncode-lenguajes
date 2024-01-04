///-- EJEMPLO AVANZADO ****************************************************************************
var state = {
    left: 8,
    moves: 0,
    cards: [
        { id: "green-triangle", color: "green", shape: "triangle" },
        { id: "blue-square", color: "blue", shape: "square", selected: true },
        { id: "purple-circle", color: "purple", shape: "circle" },
    ],
    hint: { color: "green", shape: "triangle" },
    over: false,
    isCorrect: null,
    rank: 0,
};
// Prueba
var over = get(state, 'over'); // boolean
var hint = get(state, 'hint'); // {"color": string, "shape": string}
var selected = get(state, 'cards', 0, 'selected'); // boolean | undefined
var never1 = get(state, 'hint', 'id'); // never
var never2 = get(state); // never
var never3 = get(state, 'hint', ''); // never
