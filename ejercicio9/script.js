/*Un conocido portal de educación en tecnología está ofreciendo programas para aprender
a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada
cuánto deberá pagar mensualmente de acuerdo a la opción elegida.

El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
• Course: $4999 MXN
• Carrera $3999 MXN
• Master: $2999 MXN

Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente
al precio final.
• Beca Facebook: 20% de descuento.
• Beca Google: 15% de descuento.
• Beca Jesua: 50% de descuento.

Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría
en total por el curso elegido, tomando en cuenta las siguientes duraciones:
• Course: 2 meses
• Carrera 6 meses
• Master: 12 meses */

//variables de entrada de datos
let course = 4999;
let carrera = 3999;
let master = 2999;
let descuento = 0;
let precioFinal = 0;
let duracion = 0; 
let total = 0;


//Variable de solicitud de curso
let curso = prompt("¿Qué programa desea tomar? (course, carrera, master)");
let duracionCurso = 0;

if (curso == "course") {
    precioFinal = course;
    duracion = 2;
}
else if (curso == "carrera") {
    precioFinal = carrera;
    duracion = 6;
}
else if (curso == "master") {
    precioFinal = master;
    duracion = 12;
}
else {
    console.log("No tenemos este curso, lo sentimos.");
}

//Variable de solicitud de beca
let beca = prompt("¿Cuenta con alguna beca? (facebook, google, jesua)");
if (beca == "facebook") {
    descuento = precioFinal * 0.20;
    precioFinal = precioFinal - descuento;
}
else if (beca == "google") {
    descuento = precioFinal * 0.15;
    precioFinal = precioFinal - descuento;
}
else if (beca == "jesua") {
    descuento = precioFinal * 0.50;
    precioFinal = precioFinal - descuento;
}
else {
    console.log("No cuenta con beca");
}

total = precioFinal * duracion;
console.log(`El precio mensual con descuento es de ${precioFinal} MXN`);
console.log(`El total a pagar por el curso es de ${total} MXN`);
