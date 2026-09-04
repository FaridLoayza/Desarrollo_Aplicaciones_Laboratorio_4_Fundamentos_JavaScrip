// EJERCICIO 2: ANÁLISIS DE CALIFICACIONES

const estudiantes = [
  { nombre: "Andrea", nota: 17 },
  { nombre: "Carlos", nota: 11 },
  { nombre: "Lucía", nota: 19 },
  { nombre: "Mateo", nota: 8 },
  { nombre: "Valeria", nota: 14 }
];

console.log("Ejercicio 2: Análisis de calificaciones");

// 1. Nombres de los estudiantes
const nombres = estudiantes.map(estudiante => estudiante.nombre);
console.log("1. Nombres:", nombres);

// 2. Estudiantes con nota >= 13
const notaMayorIgual13 = estudiantes.filter(estudiante => estudiante.nota >= 13);
console.log("2. Nota >= 13:", notaMayorIgual13);

// 3. Buscar a Lucía
const lucia = estudiantes.find(estudiante => estudiante.nombre === "Lucía");
console.log("3. Estudiante encontrado:", lucia);

// 4. Promedio general
const sumaNotas = estudiantes.reduce(
  (acumulador, estudiante) => acumulador + estudiante.nota,
  0
);
const promedio = sumaNotas / estudiantes.length;
console.log("4. Promedio general:", promedio.toFixed(2));

// 5. Cantidad de desaprobados (nota < 12)
const desaprobados = estudiantes.filter(estudiante => estudiante.nota < 12);
console.log("5. Cantidad de desaprobados:", desaprobados.length);

// 7. Nuevo array con propiedad "estado"
const estudiantesConEstado = estudiantes.map(estudiante => {
  return {
    ...estudiante,
    estado: estudiante.nota >= 12 ? "Aprobado" : "Desaprobado"
  };
});
console.log("7. Estudiantes con estado:", estudiantesConEstado);