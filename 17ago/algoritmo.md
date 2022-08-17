# Sumar

Primero crear una página con un input, el usuario deberá ingresar la formula de suma en el formato "1+10+100+200"

## Algoritmo

1. Crear pagina con input y un botón "calcular" [OK]
2. Hacer una función para el evento click [OK]
   1. Recuperar el valor del input (document.getElementById().value)
   2. Dividir el texto por el simbolo "+" (obtenemos un arreglo) (arreglo.split('+'))
   3. Recorremos con un for el arreglo, y vamos a ir sumando a una variable el numero que tengo en ese momento
   4. Imprimir el resultado en console y en html