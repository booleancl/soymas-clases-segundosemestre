// // Arreglos
// const arreglo = [10,2202,31,45,59]
// arreglo.length // largo del arreglo, en este caso 5



// const formula = "1+100"
// const numeros = formula.split('+') // aqui tengo un arreglo
// let total = 0
// //   inicio          condicion                incremento
// for (let indice = 0; indice < arreglo.length; indice++) {
//   total = total + Number(arreglo[indice])
// }

// console.log('La suma total es:', total)

const calcular = () => {
  // "1+100"
  const formulaInput = document.getElementById('formula').value;
  const arregloConNumeros = formulaInput.split('+')


  let total = 0;
  for (let indice = 0; indice < arregloConNumeros.length; indice++) {
    total = Number(arregloConNumeros[indice]) + total;
  }

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = "<p>El resultado es <strong>" + total + "</strong></p>"
}
