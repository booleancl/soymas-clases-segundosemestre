/* 
1. si hago click en el boton activar (onclick)
  1.1 Se cambia la clase del div resultado por "activo" (seleccionamos el elemento, cambiamos la clase)
2. Si hago click en el boton desactivar
  1.1 Se cambia la clase del div resultado por inactivo (seleccionamos el elemento, cambiamos la clase)
*/

const activarDiv = () => {
  const div = document.getElementById('resultado')
  div.className = 'activo'
}

const desactivarDiv = () => {
  const div = document.getElementById('resultado')
  div.className = 'inactivo'
}
