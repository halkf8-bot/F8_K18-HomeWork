// Task 1
function getTriangleType(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        return "Invalid";
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Not a triangle";
    }
    if (a === b && b === c) {
        return "Equilateral";
    }
    if (a === b || a === c || b === c) {
        return "Isosceles";
    }
    if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b) {
        return "Right";
    }
    return "Scalene";
}
console.log(getTriangleType(2, 2, 2));
console.log(getTriangleType("1", "2", "3"));
console.log(getTriangleType(3, 4, 5));

// Task 2
function isPerfectNumber(a) {
    let result = a ** 0.5;
    if (typeof a !== 'number' || a < 0) {
        return false;
    }
    if (result % 1 === 0) {
        return "square number";
    } else {
        return "not a square number";
    }
}
console.log(isPerfectNumber(17));