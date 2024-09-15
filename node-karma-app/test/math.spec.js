// test/math.spec.js
import { suma, resta, multiplicacion, division } from '../src/math';

describe('Pruebas para las funciones matemáticas', function() {
  // Pruebas para la función suma
  it('debería devolver la suma de dos números', function() {
    expect(suma(1, 2)).toBe(3);
  });

  // Pruebas para la función resta
  it('debería devolver la resta de dos números', function() {
    expect(resta(5, 2)).toBe(3);
  });

  // Pruebas para la función multiplicacion
  it('debería devolver la multiplicación de dos números', function() {
    expect(multiplicacion(3, 4)).toBe(12);
  });

  // Pruebas para la función division
  it('debería devolver la división de dos números', function() {
    expect(division(10, 2)).toBe(5);
  });

  it('debería lanzar un error al dividir por cero', function() {
    expect(function() { division(10, 0); }).toThrow(new Error("No se puede dividir por cero"));
  });

  it('debería lanzar un error si se pasan valores no numéricos', function() {
    expect(() => division("10", 2)).toThrow();
    expect(() => multiplicacion("a", 2)).toThrow();
  });
});