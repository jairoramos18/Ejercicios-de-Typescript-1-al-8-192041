console.log(`ejercicio siete`)
let arregloNum: number[] = [1, 2, 3, 4, 5,10,20,19];

let mayor = arregloNum[0]; 

for (let i = 1; i < arregloNum.length; i++) {
    if (arregloNum[i] > mayor) {
        mayor = arregloNum[i];
    }
}

console.log(`El número mayor es: ${mayor}`);
