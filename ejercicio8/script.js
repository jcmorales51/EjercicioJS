/** Escribe un programa que responda a un usuario que quiere comprar un helado en una
 conocida marca de comida rápida, cuánto le costará en función del topping que elija.

• El helado sin topping cuesta 50 MXN.
• El topping de oreo cuesta 10 MXN.
• El topping de KitKat cuesta 15 MXN.
• El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará
“no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado
sin ningún topping. */

//variables de entrada de datos
let helado = 50;
let oreo = 10;
let kitkat = 15;
let brownie = 20;
//Variable de solicitud de topping
let topping = prompt("¿Qué topping desea? (oreo, kitkat, brownie)");
let precio = 0;

if (topping == "oreo") {
    precio = helado + oreo;
    console.log(`El helado con topping de oreo cuesta ${precio} MXN`);
    alert(`El helado con topping de oreo cuesta ${precio} MXN`);
}
else if (topping == "kitkat") {
    precio = helado + kitkat;
    console.log(`El helado con topping de kitkat cuesta ${precio} MXN`);
    alert(`El helado con topping de kitkat cuesta ${precio} MXN`);
}
else if (topping == "brownie") {
    precio = helado + brownie;
    console.log(`El helado con topping de brownie cuesta ${precio} MXN`);
    alert
}
else {
    console.log("No tenemos este topping, lo sentimos.");
    console.log(`El helado sin topping cuesta ${helado} MXN`);
    alert("No tenemos este topping, lo sentimos.");
    alert(`El helado sin topping cuesta ${helado} MXN`);
}

