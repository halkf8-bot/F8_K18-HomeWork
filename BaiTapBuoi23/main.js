// Task 1
function classifyTriangle(a, b, c) {
    // if a, b, c do not form a triangle
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "three sides do not form a triangle.";
    }
    // if three sides are equal
    if (a === b && b === c) {
        return "equilateral triangle";
    }
    // if two sides are equal
    if (a === b || a === c || b === c) {
        return "isosceles triangle";
    }
    // if it is a right triangle
    if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b) {
        return "right triangle";
    }
    // the remaining cases
    return "ordinary triangle";
}
console.log(classifyTriangle(2, 2, 2));

// Task 2
function checkNumber (a) {
    let result = a ** 0.5;
    if (result % 1 === 0) {
        return "square number";
    } else {
        return "not a square number";
    }
}
console.log(checkNumber(17));