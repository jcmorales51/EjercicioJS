/*Encuentra todos los números pares de un arreglo y crear un arreglo nuevo con ellos.
Ejm:
Entrada:
arreglo = [3, 4, 5, 12, 6, 1, 13]
Salida:
arregloPar = [4, 12, 6] */
let arreglo = [3, 4, 5, 12, 6, 1, 13];
let arregloPares = [];
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
        arregloPares.push(arreglo[i]);
    }
}
console.log(arregloPares);
