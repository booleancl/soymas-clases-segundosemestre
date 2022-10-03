// sumar en la mitad de ciclos

const grades = [1.3, 2.1, 3.4, 7.0, 6.2, 5.4]
let index = suma = 0
while(index < (grades.length / 2)) {
  console.log("sumando", grades[index], grades[grades.length - (index + 1)])
  suma = suma + (grades[index] + grades[grades.length - (index + 1)])
  index++
}
console.log(suma)
