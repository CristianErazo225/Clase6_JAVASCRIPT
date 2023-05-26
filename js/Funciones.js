//Clase numero 6 

/*num1 = 10
num2 = 2

sum = num1 + num2
res = num1 - num2
div = num1 / num2
mult = num1 * num2


alert("El resultado de la resta es: " + res + "\nla suma es: " 
+sum + "\nla Divicion es: " +div + "\nla multiplicacion es: " +mult) */



//Declaracion de variables con Var
/*var a1 = 20
var a2 = 30

alert(a1)
var a1
alert(a1)*/

// Declaracion de variables con let
/*let num1 = 10
let num2 = 2

sum = num1 + num2
res = num1 - num2
div = num1 / num2
mult = num1 * num2

alert("El resultado de la resta es: " + res + "\nla suma es: " 
+sum + "\nla Divicion es: " +div + "\nla multiplicacion es: " +mult) */

//Declaracion de constantes:
/*const valor = 2000 //--> El valor no se puede cambiar siempre va a ser 2000
alert("La variable es: "+valor)*/

// Declaracion de multiples variables
/*let number1 = 4, number2 = 10, res;
number1++
number2--
alert(number1 + "\n" + number2)

let flat = true
alert(flat)
alert(!flat)*/

//Declaracion de Arreglos:
const materias =["Calculo","Programacion","Redes","Telematica","ElectivaII"]
const programas = new Array("Mercadeo","Psicologia","Medicina","Ing.Civil","L.Informatica");

materias.sort()//para ordenar las materias
programas.sort()
/*alert(materias[0]+" - "+materias[1]+" - "+materias[2]+" - "+materias[3]+" - "+materias[4])
alert(programas[0]+" - "+programas[1]+" - "+programas[2]+" - "+programas[3]+" - "+programas[4])

alert("La longitud de materias es: "+ materias.length)*/

materias.push("Electrotecnia")//adiciona al final del arreglo
materias.sort()
alert(materias[0]+" - "+materias[1]+" - "+materias[2]+" - "+materias[3]+" - "+materias[4]+" - "+materias[5])

