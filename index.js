let listaSuper = [];
for (let i = 0; i < 100; i++) {
    let productos = prompt("Ingrese productos a comprar");
    if (productos.toLowerCase() === "no") {
        console.log("Eso fue todo")
        break
    } else {
        listaSuper.push(productos)
    }
}
console.log("Estos son sus productos: " + listaSuper)

const productos = [
    {nombre: "doggi", precio: 5000},
    {nombre: "catchow", precio: 4000},
    {nombre: "raza", precio: 6000},
    {nombre: "pedigrii", precio: 8000},
    {nombre: "camas para perro", precio: 7000},
    {nombre: "comida para pez", precio: 1000},
    {nombre: "juguetes", precio: 200},
]

let consulta = prompt("Introduce el nombre del producto")
let resultado = productos.find(producto => producto.nombre === consulta)

if (resultado) {
    console.log("Hay stock")
    console.log(resultado)
} else {
    console.log("No hay stock")
}


let compra = prompt("introdusca un producto: doggi, dogchow, catchow, raza, pedigree")
if (compra === "doggi") {
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
 
const sorteo = () => {
    return Math.round(Math.random () * 10000)
}
console.log("el ganador del sorte es el cliente numero : " + sorteo())