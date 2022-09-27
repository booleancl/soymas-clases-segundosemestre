const numbers = [18, 20, 200, 1, 20, 19, 91, 28, 274, 2]

let index = 0
let sum = 0
do {
  sum += numbers[index] // sum = sum + numbers[index]
  index++ // index = index + 1
}while(index < numbers.length)
console.log("El total es: ", sum)