let num: number[] = new Array(5);
let numero: number;
let indice: number = 0;
for (indice = 0; indice < 5; indice++) {
  numero = Number(prompt("Ingrese un Número"));
  num[indice] = numero;
  console.log("el número en la posición", indice, " es ", num[indice]);
}

// while (indice < 5) {
//   indice++;
// }
