//Encuentra el número mayor de un arreglo.
//Ejm:
//Entrada:
//arreglo = [4, 5, 1, 8, 3]
//Salida: 8
let arreglo = [4, 5, 1, 8, 3];
let mayor = arreglo[0];
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
        mayor = arreglo[i];
    }
}
console.log(mayor);
alert(mayor);