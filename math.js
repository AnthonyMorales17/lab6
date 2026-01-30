function mcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    
    if (b === 0) {
        return a;
    }
    
    return mcd(b, a % b);
}

function fibonacci(n) {
    if (n < 0) {
        throw new Error('El número debe ser no negativo');
    }
    
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    
    return b;
}

module.exports = { mcd, fibonacci };
