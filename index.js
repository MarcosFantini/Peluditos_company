for (let i = 0; i < 5; i++) {
    let listaCompras = prompt("introdusca en su changuito sus productos a comprar: ")
    console.log("en su carrito hay los siguientes productos: " + listaCompras)
    
}




let compra = prompt("introdusca un producto: dogi, dogchow, catchow, raza, pedigree")

if (compra === "dogi") {
    console.log("su alimento vale 4000 pesos")
    
} else if (compra === "dogchow") {
    console.log("su alimento vale 5000 pesos")
    
} else if (compra === "catchow"){
    console.log("su alimento vale 3000 pesos")

}else if (compra === "raza"){
    console.log("su alimento vale 2500 pesos")

}else if (compra === "pedigree"){
    console.log("su alimento vale 5000 pesos")
}





let medioDePago = prompt(`Ingrese un medio de pago: 
                        TC = (Tarjeta de Crédito)
                        TD = (Tarjeta de Débito)
                        EF = (Efectivo)`) 
let monto = parseFloat(prompt("Ingrese su monto: "))
let descuento = 0;
function facturacion(monto, medioDePago){

    if (medioDePago === "TC" ){
        descuento = monto * 0.9
        console.log("usted debe pagar " + descuento)
    }
    else if( medioDePago === "TD"){
        descuento = monto * 0.85
        console.log("usted debe pagar " + descuento)
    }
    else if(medioDePago === "EF"){
        descuento = monto * 0.69
        console.log("usted debe pagar " + descuento)
    }
    
    else{
        console.log("medio de pago invalido")
    }
    
    
}
facturacion(monto, medioDePago)

