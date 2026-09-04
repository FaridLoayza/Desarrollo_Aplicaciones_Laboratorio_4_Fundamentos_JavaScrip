// EJERCICIO 3: GENERADOR DE CÓDIGOS ÚNICOS

function crearGeneradorCodigo(prefijo) {
  let contador = 0;

  return function () {
    contador++;
    return `${prefijo}-${contador}`;
  };
}

console.log("Ejercicio 3: Generador de códigos únicos");

// Generador de códigos para alumnos
const generarAlumno = crearGeneradorCodigo("ALU");

// Generador de códigos para docentes
const generarDocente = crearGeneradorCodigo("DOC");

console.log(generarAlumno());  // ALU-1
console.log(generarAlumno());  // ALU-2
console.log(generarDocente()); // DOC-1
console.log(generarAlumno());  // ALU-3
console.log(generarDocente()); // DOC-2