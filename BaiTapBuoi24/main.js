// Task 1
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(3));
console.log(isPrime(4));

// Task 2
function isPerfectNumber(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum = sum + i;
        }
    }
    if (sum === n && n !== 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(10));