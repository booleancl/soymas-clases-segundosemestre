/*

En un edificio de N ascensores, necesitamos crear un sistema que sepa distribuirlos, cuando un ascensor es llamado por alguien.

Por ejemplo
Si existen 5 ascensores, y un usuario llama a uno desde el piso 15, el sistema debe indicar cual ascensor irá a buscar al usuario.

Para ello, debe considerarse el ascensor mas cercano.
Los ascensores pueden estar en cualquier piso

*/

const dondeEstaElUsuario = 15
const posicionAscensores = [-1, 5, 10, 1, 1]
const distanciaCallbackFn = (pisoDelAscensor) => {
  const distancia = dondeEstaElUsuario - pisoDelAscensor
  return Math.abs(distancia)
}

let indiceMasCercano = -1

const calcularAscensorCercano = (acumulado, pisoActual, index) => {
  if(acumulado < pisoActual){
    return acumulado
  } else {
    return pisoActual
  }
} 

// ¿A que distancia están los ascensores del usuario?
const distanciaArr = posicionAscensores.map(distanciaCallbackFn)
console.log(distanciaArr)


// ¿Cuál es la menor distancia?
const pisoMasCercano = distanciaArr.reduce(calcularAscensorCercano)
console.log("Piso mas cercano", pisoMasCercano)

// ¿Cuál es el ascensor indicado?
console.log("Enviar el ascensor:", distanciaArr.indexOf(pisoMasCercano)+1)

// Si el usuario llama desde el piso 5, mandaría al ascensor 2
// Output: Enviando el ascensor 2