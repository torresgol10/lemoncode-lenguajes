///-- CLASSES ************************************************************************************
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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Person_name;
/*
Las notación de clases se introdujo en ES6 como una forma abreviada de implementar el modelo de
prototipos**. Veamos sus características principales:

**IMPORTANTE: Como veremos más adelante en el capítulo de clases avanzadas, una vez hayamos
asimilado el concepto del prototipo y su herencia, descubriremos que la notación de clases no es
más que azúcar sintáctico que nos abstraen y simplifican la tarea de trabajar a más bajo nivel con
funciones constructoras, prototipos y el operador new. RECORDAD: en javascript las clases como tales
no existen!
*/
// *** SINTAXIS
var Person = /** @class */ (function () {
    // Esta función se ejecutará cada vez que creemos una instancia
    function Person(name) {
        this.name = name;
    }
    // Este método es creado una única vez y es compartido por todas las instancias
    Person.prototype.greet = function () {
        console.log("Hello, I'm " + this.name);
    };
    return Person;
}());
var antonio = new Person("Antonio");
antonio.greet(); // "Hello, I'm Antonio"
var javi = new Person("Javi");
javi.greet(); // "Hello, I'm Javi"
console.log(antonio.greet === antonio.greet);
console.log(typeof Person); // "function"
// Por debajo, una clase es realmente una función constructora. No hay un tipo "class".
// Desentrañaremos este misterio más adelante con el modelo prototípico.
// *** HERENCIA
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
var taxi = new Taxi();
console.log(taxi);
taxi.drive(100); // "Driving 100kms... And I am free"
console.log(taxi.isOccupied); // false
taxi.service();
console.log(taxi.isOccupied); // true
taxi.drive(50); // "Driving 50kms... And I am in service"
taxi.showKms(); // "Taxi total Kms: 150"
// *** PROPIEDADES ESTÁTICAS
var Employee = /** @class */ (function () {
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    // Método estático
    Employee.isMinimumSalary = function (salary) {
        return salary >= Employee.minSalary;
    };
    Employee.prototype.getDetails = function () {
        var diffSalary = Employee.minSalary - this.salary;
        var diffToString = Employee.isMinimumSalary(this.salary) > 0 ? 'más' : 'menos';
        return "".concat(this.name, " gana ").concat(this.salary, "\u20AC (").concat(Math.abs(diffSalary), "\u20AC ").concat(diffToString, " que el SMI)");
    };
    // Propiedad estática
    Employee.minSalary = 1200;
    return Employee;
}());
var juan = new Employee("Juán", 2010);
console.log(juan.getDetails());
var alan = new Employee("Alan", 1000);
console.log(alan.getDetails());
console.log(Employee.isMinimumSalary(900)); // false
// Las propiedades estáticas no existen en las instancias:
console.log(juan.minSalary); // undefined
console.log(juan.isMinimumSalary); // undefined
// *** PROPIEDADES PRIVADAS
// Sólo pueden ser accedidas desde métodos creados dentro del cuerpo de una clase
var Person = /** @class */ (function () {
    function Person(name) {
        // ⚠ Deben ser declaradas dentro de la clase
        _Person_name.set(this, void 0);
        __classPrivateFieldSet(this, _Person_name, name, "f");
    }
    Person.prototype.greet = function () {
        console.log("Hello, I'm " + __classPrivateFieldGet(this, _Person_name, "f"));
    };
    return Person;
}());
_Person_name = new WeakMap();
var antonio = new Person("Antonio");
antonio.greet();
console.log(antonio.name); // undefined
console.log(antonio.); // Error!
// Refactorización del mismo ejemplo Employee con propiedades privadas
var Employee = /** @class */ (function () {
    function Employee(name, salary) {
        _Employee_name.set(this, void 0);
        _Employee_salary.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_name, name, "f");
        __classPrivateFieldSet(this, _Employee_salary, salary, "f");
    }
    Employee.prototype.getDetails = function () {
        var diffMinSalary = Math.abs(__classPrivateFieldGet(this, _Employee_salary, "f") - __classPrivateFieldGet(Employee, _a, "f", _Employee_minSalary));
        var diffMinSalaryToString = __classPrivateFieldGet(Employee, _a, "m", _Employee_isMinimumSalary).call(Employee, __classPrivateFieldGet(this, _Employee_salary, "f")) ? 'más' : 'menos';
        return "".concat(__classPrivateFieldGet(this, _Employee_name, "f"), " gana ").concat(__classPrivateFieldGet(this, _Employee_salary, "f"), "\u20AC (").concat(diffMinSalary, "\u20AC ").concat(diffMinSalaryToString, " que el SMI)");
    };
    var _a, _Employee_minSalary, _Employee_isMinimumSalary, _Employee_name, _Employee_salary;
    _a = Employee, _Employee_name = new WeakMap(), _Employee_salary = new WeakMap(), _Employee_isMinimumSalary = function _Employee_isMinimumSalary(salary) {
        return salary >= __classPrivateFieldGet(Employee, _a, "f", _Employee_minSalary);
    };
    // Ahora este valor no es accesible de forma externa
    _Employee_minSalary = { value: 1200 };
    return Employee;
}());
var antonio = new Employee("Antonio", 2000);
console.log(antonio.getDetails());
// *** CLASS FIELDS
// Podemos inicializar propiedades que parten de valores fijos sin usar constructor. Si te fijas
// las hemos visto anteriormente pero con otros modificadores: `static` y el prefijo de privado `#`.
// También podemos crear propiedades públicas de este modo:
var Counter = /** @class */ (function () {
    function Counter() {
        this.value = 0;
    }
    Counter.prototype.increment = function () {
        this.value++;
    };
    Counter.prototype.decrement = function () {
        this.value--;
    };
    return Counter;
}());
var counter = new Counter();
console.log(counter.value); // 0
counter.increment();
console.log(counter.value); // 1
counter.decrement();
console.log(counter.value); // 0
