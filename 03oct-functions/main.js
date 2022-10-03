const saludar = () => {
  console.log("Hello world!")
}

const getSalute = (name) => {
  return "Hola " + name
}

const getFullName = (name, apellido1, apellido2) => {
  return name + " " + apellido1 + " " + apellido2
}

const fullName = getFullName('ale', 'bustos', 'nuñez');
console.log(fullName, "Tu nombre tiene ", fullName.length, " caracteres")

const esPar = (number) => {
  if(number % 2 == 0){
    return true
  } else {
    return false
  }
}

console.log(esPar(2))

const numbers = [1,2,5,6,9]

for(let i = 0; i < numbers.length; i++){
  if(esPar(numbers[i])){
    console.log("El numero", numbers[i], ' es Par')
  } else {
    console.log("El numero", numbers[i], ' es Impar')
  }
}

// saludar()
// console.log(getSalute('ale'))
// console.log(getSalute('silvia'))

// node main.js