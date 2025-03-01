console.log("ejercicio ocho");
function invertir(text) {
    return text.split("").reverse().join("");
}
var cadena = "perro convertido";
var cadenaInvert = invertir(cadena);
console.log("normal: ".concat(cadena));
console.log("Invertido: ".concat(cadenaInvert));
