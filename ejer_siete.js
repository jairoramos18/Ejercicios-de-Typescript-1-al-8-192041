console.log("ejercicio siete");
var arregloNum = [1, 2, 3, 4, 5, 10, 20, 19];
var mayor = arregloNum[0];
for (var i = 1; i < arregloNum.length; i++) {
    if (arregloNum[i] > mayor) {
        mayor = arregloNum[i];
    }
}
console.log("El n\u00FAmero mayor es: ".concat(mayor));
