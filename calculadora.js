const sumar = require('./Operaciones/sumar');
const restar = require('./Operaciones/restar');
const multiplicar = require('./Operaciones/multiplicar');
const dividir = require('./Operaciones/dividir')

let resultadoSuma = sumar(3,4);
let resultadoResta = restar(8,4);
let resultadoDivision= dividir(5,25);
let resultadoMultiplicacion = multiplicar(8,9);
let resultadoDivisonConCero = dividir(10,0);
let resultadoMultiplicacionConCero = multiplicar(50,0);

console.log(
  'el resultado de la suma es: ' + resultadoSuma + ' ---',
  'el resultado de la resta es: ' + resultadoResta  + ' ---',
  'el resultado de la división es: ' + resultadoDivision  + ' ---',
  'el resultado de la multiplicación es: ' + resultadoMultiplicacion  + ' ---',
  'el resultado de la división con 0 es: ' + resultadoDivisonConCero  + ' ---',
  'el resultado de la multiplicación con 0 es: ' + resultadoMultiplicacionConCero)