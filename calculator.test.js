// calculator.test.js
const { add, subtract, multiply, divide, asyncMultiply } = require('./calculator');

// Pruebas de adición
describe('Addition tests', () => {
  test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds 0 + 0 to equal 0', () => {
    expect(add(0, 0)).toBe(0);
  });
});

// Pruebas de sustracción
describe('Subtraction tests', () => {
  test('subtracts 10 - 5 to equal 5', () => {
    expect(subtract(10, 5)).toBe(5);
  });

  test('subtracts 5 - 10 to equal -5', () => {
    expect(subtract(5, 10)).toBe(-5);
  });
});

// Pruebas de multiplicación
describe('Multiplication tests', () => {
  test('multiplies 4 * 5 to equal 20', () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test('multiplies 0 * 5 to equal 0', () => {
    expect(multiply(0, 5)).toBe(0);
  });
});

// Pruebas de división
describe('Division tests', () => {
  test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('throws error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });
});

// Prueba de función asíncrona
describe('Async multiplication tests', () => {
  test('async multiplies 3 * 3 to equal 9', async () => {
    const result = await asyncMultiply(3, 3);
    expect(result).toBe(9);
  });

  test('async multiplies 0 * 10 to equal 0', async () => {
    const result = await asyncMultiply(0, 10);
    expect(result).toBe(0);
  });
});
