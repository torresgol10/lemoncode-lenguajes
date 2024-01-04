///-- CLASS SYNTACTIC SUGAR ***********************************************************************
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
// Como acabamos de estudiar con el modelo prototípico, la notación de clases es azúcar sintáctico
// que simplifica la construccion de clases y nos abstrae de la tarea de lidiar con funciones 
// constructoras, prototipos y operador new. Javascript no implementa un sistema de clases built-in
// sino que lo simula gracias al prototipo y su herencia.
// Como demostración rápida para confirmar este hecho, vamos a traer de vuelta el ejemplo de
// notación de clases y herencia visto anteriormente (Automobile + Taxi) y lo vamos a transpilar
// a ES5 para comprobar el polyfill que se aplica en dicho caso:
// *** INPUT: Azúcar sintáctico
var Automobile = /** @class */ (function () {
    function Automobile(wheels) {
        this.wheels = wheels;
        this.kms = 0;
    }
    Automobile.prototype.drive = function (kms) {
        this.kms += kms;
        console.log("Driving " + kms + "kms...");
    };
    Automobile.prototype.showKms = function () {
        console.log("Total Kms: " + this.kms);
    };
    return Automobile;
}());
var Taxi = /** @class */ (function (_super) {
    __extends(Taxi, _super);
    function Taxi() {
        var _this = _super.call(this, 4) || this;
        _this.isOccupied = false;
        return _this;
    }
    Taxi.prototype.service = function () {
        this.isOccupied = true;
    };
    Taxi.prototype.drive = function (kms) {
        _super.prototype.drive.call(this, kms);
        var serviceStatus = this.isOccupied ? "in service" : "free";
        console.log("And I am " + serviceStatus);
    };
    Taxi.prototype.showKms = function () {
        console.log("Taxi Total Kms: " + this.kms);
    };
    return Taxi;
}(Automobile));
/*

*** OUTPUT: Resultado de la transpilación

https://babeljs.io/repl

Settings:
 - Borrar los targets o Forzar todas las transformaciones para asegurar transpilación a ES5.
 - Marca la opción LOOSE

*/
///-- CLASS FACTORY ******************************************************************************
/*
Puesto que, como acabamos de ver, las clases no son más que funciones (funciones constructoras),
compartirán importantes características con éstas. Una de esas características es que pueden ser
ANÓNIMAS, lo cual tiene una implicación directa: podemos usar las clases como ciudadanos de primer
orden, ya sea para pasarlas como argumento o valor de retorno en funciones. En tal caso diremos que
estamos usando una "class expression".

Sabiendo esto, podemos implementar factorías de clases. En el siguiente ejemplo nos vamos a apoyar
en el concepto de CLOSURE para 'recordar' un mensaje y crear clases especializadas (distintas) que
procesen mensajes distintos. Veamos:
*/
function makeClass(message) {
    return /** @class */ (function () {
        function class_1() {
        }
        class_1.prototype.talk = function () {
            console.log(message);
        };
        return class_1;
    }());
}
var Cat = makeClass("Meow!");
var cat = new Cat();
cat.talk();
var Dog = makeClass("Woof!");
var dog = new Dog();
dog.talk();
