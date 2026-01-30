const { mcd, fibonacci } = require('./math');

describe('Pruebas de MCD', () => {
    test('MCD de 12 y 8 debe ser 4', () => {
        expect(mcd(12, 8)).toBe(4);
    });

    test('MCD de 48 y 18 debe ser 6', () => {
        expect(mcd(48, 18)).toBe(6);
    });

    test('MCD de 100 y 50 debe ser 50', () => {
        expect(mcd(100, 50)).toBe(50);
    });

    test('MCD de 17 y 13 debe ser 1 (números primos)', () => {
        expect(mcd(17, 13)).toBe(1);
    });

    test('MCD de 0 y 5 debe ser 5', () => {
        expect(mcd(0, 5)).toBe(5);
    });

    test('MCD debe manejar números negativos', () => {
        expect(mcd(-12, 8)).toBe(4);
        expect(mcd(12, -8)).toBe(4);
        expect(mcd(-12, -8)).toBe(4);
    });
});

describe('Pruebas de Fibonacci', () => {
    test('Fibonacci(0) debe ser 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    test('Fibonacci(1) debe ser 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    test('Fibonacci(5) debe ser 5', () => {
        expect(fibonacci(5)).toBe(5);
    });

    test('Fibonacci(10) debe ser 55', () => {
        expect(fibonacci(10)).toBe(55);
    });

    test('Fibonacci(15) debe ser 610', () => {
        expect(fibonacci(15)).toBe(610);
    });

    test('Fibonacci debe lanzar error para números negativos', () => {
        expect(() => fibonacci(-1)).toThrow('El número debe ser no negativo');
    });
});
