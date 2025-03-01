console.log(`ejercicio ocho`)
function invertir(text: string): string {
    return text.split("").reverse().join("");
}

let cadena = "perro convertido";
let cadenaInvert = invertir(cadena);

console.log(`normal: ${cadena}`);
console.log(`Invertido: ${cadenaInvert}`);
