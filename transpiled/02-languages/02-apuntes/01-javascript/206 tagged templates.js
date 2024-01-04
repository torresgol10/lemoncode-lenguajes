///-- TAGGED TEMPLATES ***************************************************************************
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*
Una forma avanzada de utilizar los template literals es mediante lo que se conoce como TAGGED
TEMPLATES. Este mecanismo nos permite consumir plantillas mediante una función y devolver resultados
customizados:
*/
// EJEMPLO 1
// *** Data
var dataA = {
    description: "iPhone 14 Pro",
    imagen: "/static/iphnone/14-pro.jpg",
    price: 1189.00,
};
var dataB = {
    description: "iPhone 13",
    imagen: "/static/iphnone/13.jpg",
    price: 859.00,
};
// *** Templating
var createTemplate = function (chunks) {
    var properties = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        properties[_i - 1] = arguments[_i];
    }
    return function (data) {
        var replaced = __spreadArray([], chunks, true);
        properties.forEach(function (prop, index) {
            replaced[index] += data[prop];
        });
        return replaced.join('');
    };
};
var articleTemplate = createTemplate(__makeTemplateObject(["\n<article>\n  <h2>", "</h2>\n  <img src=\"", "\" />\n  <span>", " \u20AC</span>\n</article>\n"], ["\n<article>\n  <h2>", "</h2>\n  <img src=\"", "\" />\n  <span>", " \u20AC</span>\n</article>\n"]), "description", "imagen", "price");
// *** Usage
var articleA = articleTemplate(dataA);
var articleB = articleTemplate(dataB);
console.log(articleA);
console.log(articleB);
/*
<article>
  <h2>iPhone 14 Pro</h2>
  <img src="/static/iphnone/14-pro.jpg" />
  <span>1189 €</span>
</article>
*/
// EJEMPLO 2
// Alternativa al ejemplo anterior:
// *** Data
var acuario = ["Acuario", "fantástica", "el amor llama a tu puerta"];
var leo = ["Leo", "un mojón", "tu código es horrible"];
// *** Templating
// ⚠ OJO, aqui el argumento phrases no corresponde a las frases de cada línea sino a los chunks
// de texto entre placeholders.
var templateFactory = function (phrases) {
    var placeholders = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        placeholders[_i - 1] = arguments[_i];
    }
    return function (data) {
        return phrases.map(function (phrase, index) { return phrase + (data[placeholders[index]] || ""); }).join('');
    };
};
var horoscopo = templateFactory(__makeTemplateObject(["\n- ", " -\nHola querid@ ", ",\nEsta semana va a ser ", " para ti\ndebido a que ", ".\n- Tu Pitonisa de Confianza -\n"], ["\n- ", " -\nHola querid@ ", ",\nEsta semana va a ser ", " para ti\ndebido a que ", ".\n- Tu Pitonisa de Confianza -\n"]), 0, 0, 1, 2);
// *** Usage
console.log(horoscopo(acuario));
// - Acuario -
// Hola querid@ Acuario,
// Esta semana va a ser fantástica para ti
// debido a que el amor llama a tu puerta.
// - Tu Pitonisa de Confianza -
console.log(horoscopo(leo));
// - Leo -
// Hola querid@ Leo,
// Esta semana va a ser un mojón para ti
// debido a que tu código es horrible.
// - Tu Pitonisa de Confianza -
