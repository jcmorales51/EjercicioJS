let numero1 = parseInt(prompt("Introduce un número entre 1 y 50"));
let numero2 = parseInt(prompt("Introduce otro número entre 1 y 50"));

for (let i = 1; i <= 50; i++) {
  if (i === numero1 || i === numero2) {
    console.log(i + " ¡Lotería!");
    
  } else {
    console.log(i);
  }
}
