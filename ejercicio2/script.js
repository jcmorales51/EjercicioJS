//Escriba un programa de JavaScript que itera enteros del 1 al 100. Pero para múltiplos de tres, imprima "Fizz" en lugar del número y para múltiplos
//de cinco imprima "Buzz".
// Para números múltiplos de tres y cinco, imprima "FizzBuzz".
//Salida de muestra:

let enteros = 100;
for (let i = 1; i <= enteros; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
