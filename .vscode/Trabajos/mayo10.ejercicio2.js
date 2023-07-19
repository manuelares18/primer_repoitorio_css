/** Compra de articulos, si los articulos comprados es menor a tres pagar en efectivo caso contrario pagar con tarjeta */

let compra = parseInt(prompt("ingrese la cantidad de articulos"));

if (compra<3) {
   alert("Pagar en efectivo");

}
else{
    alert("pagar con tarjeta");
}
