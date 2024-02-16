const readlineSync = require('readline-sync');
const cantidadDeMercancia = +readlineSync.question(`Ingrese la cantidad de mercancías: `);

let costoTotalDelFlete = 0;
let productoDeMayoresDimensiones = 0;
let promedioDelCostoDeProductosEnElFleteIncluidoImpuestos = 0;
let costoDeImpuestosPorElFlete = 0;

let proctoMayorDimension = 0;

for (let i = 0; i < cantidadDeMercancia; i++) {
    console.info(`Ingrese las dimensiones del paquete ${i+1}: `);
    ancho = +readlineSync.question(`Ingrese el ancho del paquete ${i+1}: `);
    alto = +readlineSync.question(`Ingrese el alto del paquete ${i+1}: `);
    profundidad = +readlineSync.question(`Ingrese la profundidad del paquete ${i+1}: `);

    let TotalDimensiones = ancho*alto*profundidad;
    console.info(`Las dimensiones del paquete ${i+1} son: ${TotalDimensiones}cms`);
    let costoDelProducto = TotalDimensiones*100;

    console.info(`El costo del paquete ${i+1} es: $${costoDelProducto}`);
    if (TotalDimensiones <= 0) {
        console.info(`****Las dimensiones de la mercancía no puede ser 0 o número negativo****`);               
    }
    else if (TotalDimensiones < 10000) {
        costoImpuesto = costoDelProducto * 0.10
        console.info(`el valor del impuesto 10% es ${costoImpuesto} para el paquete ${i+1}`);
        costoDelProducto = costoDelProducto + (costoDelProducto * 0.10);
        console.info(`costo del producto ${i+1} 10% = ${costoDelProducto} para el paquete ${i+1}`);
        }
    else {
        costoImpuesto = costoDelProducto * 0.20
        console.info(`el valor del impuesto 20% es ${costoImpuesto} para el paquete ${i+1}`);
        costoDelProducto = costoDelProducto + (costoDelProducto * 0.20);
        console.info(`costo del producto ${i+1} 20% = ${costoDelProducto} para el paquete ${i+1}`);
        }
    
    costoTotalDelFlete = costoTotalDelFlete + costoDelProducto;
    
    if (TotalDimensiones > productoDeMayoresDimensiones) {
        productoDeMayoresDimensiones = TotalDimensiones;
        proctoMayorDimension = i+1;
    }

    promedioDelCostoDeProductosEnElFleteIncluidoImpuestos = (costoTotalDelFlete/cantidadDeMercancia);

    costoDeImpuestosPorElFlete = costoDeImpuestosPorElFlete + costoImpuesto; 
}

console.dir(`El costo TOTAL del flete es: $${costoTotalDelFlete}`);
console.dir(`El producto de mayor dimensión es el producto #: ${proctoMayorDimension} y sus dimensiones son: ${productoDeMayoresDimensiones} cms`);
console.dir(`El promedio del costo de productos en el flete incluyendo impuestos es: ${promedioDelCostoDeProductosEnElFleteIncluidoImpuestos}`);
console.dir(`El valor de impuestos a pagar por el flete es: ${costoDeImpuestosPorElFlete}`);
