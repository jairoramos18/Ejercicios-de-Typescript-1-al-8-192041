console.log(`ejercicio tres`)

let nombreman: String[] = ["Juan", "María", "Carlos", "Alonso","Yurley"];

for (let i=0; i<nombreman.length; i++){
    console.log(` ${i}`, nombreman[i]);
    }

    nombreman.forEach((nombre, i) => {
        console.log(` ${i}: ${nombre}`);
    });

    for (let nombre of nombreman) {
        console.log(nombre);
    }
    