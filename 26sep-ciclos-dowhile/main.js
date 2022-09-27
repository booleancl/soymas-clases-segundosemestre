// contar desde el 1 al 10

let number = 1

do {
  console.log(number)
  number++ // number = number + 1
}while(number <= 10)

// contar desde 10 a 1
number = 10

do {
  console.log(number)
  number-- // number = number - 1
}while(number >= 1)

// Mostrar un nombre al revés
const name = "alejandro"
let index = name.length - 1
do {
  console.log(name[index])
  index-- // index = index - 1
} while(index >= 0)

// Mostrar nombre al reves en una linea
let nameConcat = ""
index = name.length - 1
do {
  nameConcat += name[index] // nameConcat = nameConcat + name[index]
  // console.log(nameConcat)
  index--
} while(index >= 0)
console.log(nameConcat)
