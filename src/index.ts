let dimensionArreglo: number = Number(
  prompt("Ingrese la cantidad de celdas deseadas")
);
let indice: number;
let nombrePersonas: string[] = new Array(dimensionArreglo);

for (indice = 0; indice < dimensionArreglo; indice++) {
  nombrePersonas[indice] = String(
    prompt("Ingrese el nombre deseado en la posición " + (indice + 1))
  );
}

for (indice = 0; indice < dimensionArreglo; indice++) {
  console.log(
    "El nombre ingresado en la posición ",
    indice,
    " es ",
    nombrePersonas[indice]
  );
}

// let num: number[] = new Array(5);
// let numero: number;
// let indice: number = 0;
// for (indice = 0; indice < 5; indice++) {
//   numero = Number(prompt("Ingrese un Número"));
//   num[indice] = numero;
// }
// for (indice = 0; indice < 5; indice++) {
//   num[indice] = numero;
//   // console.log("el número en la posición", indice, " es ", num[indice]);
//   console.log("El número en la posición", indice, "es ", num[indice]);
// }
