// Como declarar variables (y asignando valor)
const variable = 1
let variable2 = 2

// Como asignar valores a una variable
variable2 = "otra cosa"

// Tipos de variables
// Texto (String)
const texto = "texto" + 'texto' // textotexto

// Numeros (Number)
const numero = 2

// Boolean
const booleanos = true; // false

// Arreglos
const arreglos = [1, 2, 3, 4, 5]


// Funciones (Functions)
const sumar = (parametro, parametro2) => {
  console.log(parametro)
  console.log(parametro2)
}

// Objetos
const objeto = {
  propiedad: 'valor',
  nombre: 'Scarlet',
  apellido: 'Alfaro',
  // imprimirNombre: () => {}
}

// objeto.propiedad
// objeto.nombre


const resta = (parametro, parametro2) => {
  return parametro - parametro2
}

const calculadora = {
  sumar: (numero1, numero2) => {
    return numero1 + numero2
  },
  resta: (numero1, numero2) => {
    return numero1 - numero2
  },
  division: (numero1, numero2) => {
    return numero1 / numero2
  },
  multiplicacion: (numero1, numero2) => {
    return numero1 * numero2
  }
}
