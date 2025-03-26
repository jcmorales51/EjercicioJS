/**Crea un programa que pida al usuario el diámetro de una rueda y su grosor (en metros).
a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo
grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es
para un vehículo mediano”. Si no se cumplen ninguna de las condiciones anteriores debe
mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.

b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, o si el diámetro es menor
o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el
mensaje “El grosor para esta rueda es inferior al recomendado”

Ejm:
Entrada:
Ingrese el diámetro de una rueda = 1.1
Ingrese el grosor de la rueda = 0.24
Salida:
La rueda es para un vehículo mediano.
Su grosor es inferior al recomendado. */

let diametro = parseFloat(prompt("Ingrese el diámetro de una rueda"));
let grosor = parseFloat(prompt("Ingrese el grosor de la rueda"));

if (diametro > 1.4) {
    console.log("La rueda es para un vehículo grande");
}
else if (diametro <= 1.4 && diametro > 0.8) {
    console.log("La rueda es para un vehículo mediano");
}
else {
    console.log("La rueda es para un vehículo pequeño");
}

if ((diametro > 1.4 && grosor < 0.4) || (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)) {
    console.log("El grosor para esta rueda es inferior al recomendado");
}
else {
    console.log("El grosor para esta rueda es el recomendado");
}