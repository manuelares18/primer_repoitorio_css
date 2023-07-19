/** ingresar por teclado 3 numeros enteros y mostrar el menor de los 3 numeros ingresados y suma de dichos numeros **/

let num1 = parseInt(prompt("ingrese un numero"))
let num2 = parseInt(prompt("ingrese segundo numero"))
let num3 = parseInt(prompt("ingrese tercer numero"))
let menor = num1
if (num2 < menor){
    menor = num2
} 
if (num3 < menor){
    menor = num3
}
let suma = num1 + num2 + num3
alert ("el menor de los tres es: " + menor)
alert ("la suma de los tres numeros es: " + suma)

