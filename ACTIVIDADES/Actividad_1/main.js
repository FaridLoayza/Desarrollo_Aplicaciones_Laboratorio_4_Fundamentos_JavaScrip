// PARTE 2: JavaScript externo
console.log("JavaScript desde un archivo externo");


// PARTE 3: Variables, constantes y tipos
const nombreProducto = "Teclado mecánico";
let precio = 180;
let stock = 5;
const disponible = true;

console.log(nombreProducto);
console.log(precio);
console.log(stock);
console.log(disponible);

console.log(typeof nombreProducto);
console.log(typeof precio);
console.log(typeof stock);
console.log(typeof disponible);

// JavaScript permite cambiar el tipo de una variable declarada con let
precio = "180";

console.log(typeof precio);


// PARTE 4: const, let y scope
if (stock > 0) {
    const mensaje = "Producto disponible";
    let unidades = stock;

    console.log(mensaje);
    console.log(unidades);
}

// No descomentar porque producirá ReferenceError:
// console.log(mensaje);


// PARTE 4: prueba con var
if (stock > 0) {
    var mensajeVar = "Producto disponible";
    let unidades = stock;

    console.log(mensajeVar);
    console.log(unidades);
}

console.log(mensajeVar);


// PARTE 5: Hoisting
console.log(cantidad);

var cantidad = 10;


// PARTE 5: let y Temporal Dead Zone
// No descomentar porque producirá ReferenceError:
// console.log(descuento);
// let descuento = 20;


// PARTE 6: Cálculo del importe
const nombreCliente = "Andrea";
const cantidadProductos = 3;
const precioUnitario = 120;

const importe = cantidadProductos * precioUnitario;

console.log("Cliente:", nombreCliente);
console.log("Cantidad:", cantidadProductos);
console.log("Precio unitario:", precioUnitario);
console.log("Importe:", importe);
