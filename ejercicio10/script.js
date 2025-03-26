/*Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con
cargo extra por los litros consumidos, tomando en consideración lo siguiente:

Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10
y si es “autobús” 0.5.

Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor
la cantidad de litros consumidos se ha de añadir 10 al total.

Considere:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos. */

//variables de entrada de datos
let coche = 0.20;
let moto = 0.10;
let autobus = 0.5;
let extra = 0;
let total = 0;

//Variable de solicitud de vehículo
let vehiculo = prompt("¿Qué vehículo desea calcular? (coche, moto, autobús)");
let precioKm = 0;

if (vehiculo == "coche") {
    precioKm = coche;
}
else if (vehiculo == "moto") {
    precioKm = moto;
}
else if (vehiculo == "autobús") {
    precioKm = autobus;
}
else {
    console.log("No tenemos este vehículo, lo sentimos.");
}

//Variable de solicitud de litros consumidos
let kms = parseFloat(prompt("Ingrese la cantidad de kilómetros recorridos"));
let litros = parseFloat(prompt("Ingrese la cantidad de litros consumidos"));


if (litros >= 0 && litros <= 100) {
    extra = 5;
}else {
    extra = 10;
}

total = (precioKm * kms) + extra;
console.log(`El total a pagar es de ${total}`);
alert(`El total a pagar es de ${total}`);

