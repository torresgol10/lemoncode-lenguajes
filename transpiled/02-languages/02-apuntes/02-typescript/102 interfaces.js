///-- INTERFACES **********************************************************************************
var pos = {
    latitude: 3.3112,
    longitude: 5.1123,
};
// En caso de no especificar todas las propiedades lanzará un error de compilación
var pos1 = {
    //  ^^^^ [ts] Type '{ latitude: number; }' is not assignable to type 'Geoposition'.
    latitude: 3.3112,
};
// También si especificamos propiedades por exceso, lanzaría un error.
var pos2 = {
    latitude: 3.3112,
    longitude: 5.1123,
    altitude: 325,
};
var citizen = {
    address: {
        city: "Málaga",
        street: "Héroes de Sostoa",
        zipCode: 29002,
    },
    name: "Javier",
};
var book1 = { isbn: 764589621 };
console.log(book1.author); // undefined
var book2 = { isbn: 854632187, author: "Rolan" };
console.log(book2.author); // Rolan
var product = { id: 998, stock: 0 };
product.stock = 20;
product.id = 339; // [ts] Cannot assign to 'id' because it is a constant or a 'read-only' property
var keyboardEvent = {
    key: "shift",
    type: "keyboard event",
};
var ninja = {
    swordType: "katana",
    ammoType: "shuriken",
    totalAmmo: 10,
    smokeBombs: 3,
};
var julia = {
    id: 31,
    name: "Julia",
};
var laika = {
    id: 119,
    name: "Laika",
};
// Si declaramos la siguiente función para mostrar el nombre de un usuario:
function printUserName(user) {
    console.log(user.name);
}
// Vemos que no tenemos problemas a la hora de usarlo con un objeto de tipo User
printUserName(julia);
// Pero tampoco hay problemas a la hora de utilizarlo con un objeto de tipo Dog
printUserName(laika);
var garfield = { name: "Garfield" };
printUserName(garfield);
var bob = { id: 319, name: "Bob", colors: ["white", "yellow"] };
printUserName(bob);
// bob al tener "id: number" y "name: string" es compatible, pese a tener más propiedades de
// las requeridas
// Es decir, actualmente la función printUserName necesita un objeto que estructuralmente tenga
// como mínimo las dos propiedades de User,
