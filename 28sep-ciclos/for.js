
/* 
Inicializar variables (sum, indice)
Condicion
Actualizar variables
*/


// for(inicializacion ; condicion; actualizacion){

//}

const grades = [1.3, 2.1, 3.4, 7.0, 6.2, 5.4]
let suma = 0
for(let contador = 0; contador < grades.length; contador++){
  suma += grades[contador]
  console.log("Acumulado: ",suma)

}
console.log("El total es: ", suma)