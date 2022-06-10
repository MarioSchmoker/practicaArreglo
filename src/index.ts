let dimensionArreglo: number = Number(
  prompt("Ingrese la cantidad de celdas deseadas")
);
let indice: number;
let indiceInv: number;
let arrayUsuario: number[] = new Array(dimensionArreglo);

for (indice = 0; indice < dimensionArreglo; indice++) {
  arrayUsuario[indice] = Number(
    prompt("Ingrese el nombre deseado en la posición " + (indice + 1))
  );
}
for (indice = 0; indice < dimensionArreglo; indice++) {
  console.log(
    "El número ingresado en la posición ",
    indice,
    " es ",
    arrayUsuario[indice]
  );
}

for (indiceInv = dimensionArreglo - 1; indiceInv >= 0; indiceInv--) {
  console.log(
    "El número ingresado en la posición ",
    indiceInv,
    " es ",
    arrayUsuario[indiceInv]
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
