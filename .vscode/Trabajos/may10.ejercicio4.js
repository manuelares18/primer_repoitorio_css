/**calcular el total a pagar por la compra de camisas,si se compra 3 camisas o mas se aplica un descuento del 20%
 *  sobre el total de la compra y si son menos de 3 se aplica un descuento del 10% */

let camisas = parseInt(prompt("¿cuantas camisas compraste?"))
let compra = parseInt(prompt("ingrese el total de la compra"))


if(camisas<3){
    descuento = (compra * 0.1)
    totalpagar = (compra - descuento)
    alert("su total a pagar es: " + totalpagar)
} 
if (camisas>=3){
    descuento = (compra * 0.2)
    totalpagar = (compra - descuento)
    alert("su total a pagar es: " + totalpagar )
}




