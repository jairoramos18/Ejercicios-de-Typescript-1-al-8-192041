console.log("ejercicio tres");
var nombreman = ["Juan", "María", "Carlos", "Alonso", "Yurley"];
for (var i = 0; i < nombreman.length; i++) {
    console.log(" ".concat(i), nombreman[i]);
}
nombreman.forEach(function (nombre, i) {
    console.log(" ".concat(i, ": ").concat(nombre));
});
for (var _i = 0, nombreman_1 = nombreman; _i < nombreman_1.length; _i++) {
    var nombre = nombreman_1[_i];
    console.log(nombre);
}
