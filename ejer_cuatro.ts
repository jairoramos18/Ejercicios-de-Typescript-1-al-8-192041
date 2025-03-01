console.log(`ejercicio cuatro`)
function esParOImpar(num: number): string {
    if (num % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

console.log(esParOImpar(10)); 
console.log(esParOImpar(7));  