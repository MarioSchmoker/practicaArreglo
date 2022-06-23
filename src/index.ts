let dimensionArreglo: number = Number(
  prompt("Ingrese la cantidad de celdas deseadas")
);
let indice: number;
let arrayUsuario: number[] = new Array(dimensionArreglo);

function cargarVector(arrayUsuario: number[], dimensionArreglo: number) {
  for (indice = 0; indice < dimensionArreglo; indice++) {
    arrayUsuario[indice] = Number(
      prompt("Ingrese el número deseado en la posición " + (indice + 1))
    );
  }
}

function mostrarVector(arrayUsuario: number[], dimensionArreglo: number) {
  for (indice = 0; indice < dimensionArreglo; indice++) {
    console.log(
      "El número ingresado en la posición ",
      indice + 1,
      " es ",
      arrayUsuario[indice]
    );
  }
}
function contarPositivos(
  arrayUsuario: number[],
  dimensionArreglo: number
): number {
  let contador: number = 0;
  for (indice = 0; indice < dimensionArreglo; indice++) {
    if (arrayUsuario[indice] > 0) {
      contador++;
    }
  }
  return contador;
}
function contarNegativos(
  arrayUsuario: number[],
  dimensionArreglo: number
): number {
  let contador: number = 0;
  for (indice = 0; indice < dimensionArreglo; indice++) {
    if (arrayUsuario[indice] < 0) {
      contador++;
    }
  }
  return contador;
}

function contarCeros(arrayUsuario: number[], dimensionArreglo: number): number {
  let contador: number = 0;
  for (indice = 0; indice < dimensionArreglo; indice++) {
    if (arrayUsuario[indice] === 0) {
      contador++;
    }
  }
  return contador;
}

console.log("Cargando Vector");
cargarVector(arrayUsuario, dimensionArreglo);
let numNeg = contarNegativos(arrayUsuario, dimensionArreglo);
let numCero = contarCeros(arrayUsuario, dimensionArreglo);
let numPos = contarPositivos(arrayUsuario, dimensionArreglo);

console.log("Los valores son : ");
mostrarVector(arrayUsuario, dimensionArreglo);

console.log(numPos, " Positivos ");
console.log(numNeg, " Negativos ");
console.log(numCero, " Ceros ");

// for (indiceInv = dimensionArreglo - 1; indiceInv >= 0; indiceInv--) {
//   console.log(
//     "El número ingresado en la posición ",
//     (indiceInv + 1),
//     " es ",
//     arrayUsuario[indiceInv]
//   );
// }

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
