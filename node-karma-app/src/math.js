// src/math.js

// Función para sumar dos números
export function suma(a, b) {
    return a + b;
}

// Función para restar dos números
export function resta(a, b) {
    return a - b;
}

// Función para multiplicar dos números
export function multiplicacion(a, b) {
    return a * b;
}

// Función para dividir dos números
export function division(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}