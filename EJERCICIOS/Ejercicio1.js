// EJERCICIO 1: CALCULADORA DE COSTO DE ENVÍO

function calcularEnvio(peso, tipo = "normal") {
  // Convertimos el peso a número, por si llega como texto
  peso = Number(peso);

  // Validamos que sea un número válido y mayor que cero
  if (Number.isNaN(peso) || peso <= 0) {
    throw new Error("El peso ingresado no es válido");
  }

  // Calculamos la tarifa base según el rango de peso
  let costoBase;

  if (peso <= 2) {
    costoBase = 8;
  } else if (peso <= 5) {
    costoBase = 12;
  } else {
    costoBase = 18;
  }

  // Aplicamos el incremento si el envío es express
  let costoFinal = costoBase;

  if (tipo === "express") {
    costoFinal = costoBase * 1.4;
  }

  // Retornamos el objeto con la información del envío
  return { peso, tipo, costoBase, costoFinal };
}

// PRUEBAS

console.log("Ejercicio 1: Calculadora de costo de envío");

// Prueba 1: envío normal menor de 2 kg
try {
  const envio1 = calcularEnvio(1.5);
  console.log("Envío normal (1.5 kg):", envio1);
} catch (error) {
  console.error("Error:", error.message);
}

// Prueba 2: envío express
try {
  const envio2 = calcularEnvio(4, "express");
  console.log("Envío express (4 kg):", envio2);
} catch (error) {
  console.error("Error:", error.message);
}

// Prueba 3: peso inválido
try {
  const envio3 = calcularEnvio(-3);
  console.log("Envío peso inválido:", envio3);
} catch (error) {
  console.error("Error:", error.message);
}