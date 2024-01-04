///-- CLASSES *************************************************************************************
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Al igual que en ES6 las clases se escriben utilizando el keyword "class" pero con una ligera
// diferencia. Para TypeScript todas las propiedades propias de instancias deben estar declaradas.
var Ghost = /** @class */ (function () {
    function Ghost(name, personality) {
        this.name = name; // [ts] Property 'name' does not exist on type 'Ghost'.
        this.personality = personality; // [ts] Property 'personality' does not exist on type 'Ghost'.
    }
    return Ghost;
}());
var Ghost = /** @class */ (function () {
    function Ghost(name, personality) {
        this.name = name;
        this.personality = personality;
    }
    return Ghost;
}());
// Para declarar una propiedad basta con declararla con su tipo correspondiente a nivel de clase:
var Sweep = /** @class */ (function () {
    function Sweep(name, model) {
        this.name = name;
        this.model = model;
    }
    return Sweep;
}());
var Witch = /** @class */ (function () {
    function Witch(name, sweep) {
        this.name = name;
        this.sweep = sweep;
    }
    return Witch;
}());
var mim = new Witch("Madam Mim", new Sweep("Nimbus", 2000));
// -- PUBLIC, PRIVATE, PROTECTED PROPERTIES
// En TypeScript podemos añadir modificadores de acceso a las propiedades utilizando "public",
// "private", y "protected". Por defecto las variables declaradas sin modificadores de acceso se
// consideran públicas.
var Hunger;
(function (Hunger) {
    Hunger[Hunger["Low"] = 0] = "Low";
    Hunger[Hunger["Medium"] = 1] = "Medium";
    Hunger[Hunger["High"] = 2] = "High";
    Hunger[Hunger["Full"] = 3] = "Full";
})(Hunger || (Hunger = {}));
var Undead = /** @class */ (function () {
    function Undead(diet) {
        this.diet = diet;
        this.hunger = Hunger.High;
    }
    Undead.prototype.getHunger = function () {
        return this.hunger;
    };
    Undead.prototype.feed = function () {
        this.hunger = this.setHunger();
    };
    Undead.prototype.setHunger = function () {
        switch (this.hunger) {
            case Hunger.High:
                return Hunger.Medium;
            case Hunger.Medium:
                return Hunger.Low;
            default:
                return Hunger.Full;
        }
    };
    return Undead;
}());
var Vampire = /** @class */ (function (_super) {
    __extends(Vampire, _super);
    function Vampire(clan) {
        var _this = _super.call(this, "blood") || this;
        _this.clan = clan;
        return _this;
    }
    Vampire.prototype.greet = function () {
        console.log("I'm a vampire of the ".concat(this.clan, "'s clan and I'll drink all your ").concat(this.diet));
    };
    return Vampire;
}(Undead));
var v1 = new Vampire("Malkavian");
console.log(v1.getHunger()); // "high"
v1.greet(); // I'm a vampire of the Malkavian's clan and I'll drink all your blood
v1.feed();
console.log(v1.getHunger()); // "medium"
var z1 = new Undead("brains");
// -- STATIC PROPERTIES
// Podemos añadir propiedades estáticas mediante el operador "static".
var Demon = /** @class */ (function (_super) {
    __extends(Demon, _super);
    function Demon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Demon.weakness = "Cross";
    return Demon;
}(Undead));
var demon1 = new Demon("soul");
// A una propiedad estática se accede a través de la clase y no de la instancia.
console.log(Demon.weakness); // "Cross"
demon1.weakness; // [ts] Property 'weakness' is a static member of type 'Demon'
// -- ABSTRACT CLASSES
// Mediante el operator "abstract" podemos crear clases que no puedan generar instancias
var Monster = /** @class */ (function () {
    function Monster() {
    }
    return Monster;
}());
var Werewolf = /** @class */ (function (_super) {
    __extends(Werewolf, _super);
    function Werewolf(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.name = name;
        return _this;
    }
    Werewolf.prototype.scare = function () {
        console.log("**Growls..");
    };
    Werewolf.prototype.run = function () { };
    return Werewolf;
}(Monster));
var monster = new Monster(); // [ts] Cannot create an instance of an abstract class
var lucian = new Werewolf("Lucian");
// Usando clases como interfaces
var House = /** @class */ (function () {
    function House() {
    }
    return House;
}());
var boleskineHouse = {
    name: "Boleskine House",
    location: "Scotland",
    ghosts: [new Ghost("Casper", "friendly")],
};
// -- SHORTHANDS DE CONSTRUCTOR
// Ya hemos visto que para añadir propiedades en el constructor debemos indicar previamente qué
// propiedades vamos a usar. TypeScript nos proporciona una forma abreviada de asignar propiedades
// en el constructor y es añadiendo los modificadores de acceso a los parámetros de "constructor"
var Pumpkin = /** @class */ (function () {
    function Pumpkin(size, weight) {
        this.size = size;
        this.weight = weight;
    }
    Pumpkin.prototype.getSize = function () {
        return this.size;
    };
    return Pumpkin;
}());
var p1 = new Pumpkin(30, 24);
console.log(p1.weight); // 24
console.log(p1.getSize()); // 30
