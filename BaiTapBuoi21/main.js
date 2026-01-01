// Task 1
let classA = ["An", "Binh", "Chi"];
let classB = classA;
classB[0] = "An Updated";
console.log(classA);
When an array is initialized, the system allocates memory for the array data and assigns it a specific memory address (e.g., 0x01).
When executing let classB = classA, since classA holds the reference 0x01, classB receives a copy of that same reference. Consequently, both variables point to the same memory location.
When modifying classB[0] = "An Updated", the engine accesses the memory address 0x01 (referenced by classB) and mutates the data stored there.
Therefore, console.log(classA) displays the updated value ("An Updated") because it accesses the same modified array."

// Task 2
Requirements 1: Because if one of the sides is a String, JavaScript will automatically convert the other side to a String and perform string concatenation.
Requirements 2: The result NaN in the final operation stands for 'Not a Number'.
This occurs because the subtraction operator (-) triggers implicit type coercion, attempting to convert the string into a number. The engine fails to parse the string 'Hello' into a valid numeric value (since 'Hello' is a non-numeric string), resulting in NaN.

// Task 3
let age = 9;
let mathScore = 10;
let isVip = false;
let canEnter = (age >= 10 && mathScore > 7) || isVip;
console.log(canEnter);

let age = 9;
let mathScore = 10;
let isVip = true;
let canEnter = (age >= 10 && mathScore > 7) || isVip;
console.log(canEnter);

!(age < 10) is equivalent to age >= 10 because the ! symbol is the Logical NOT operator (negation).
Therefore, !(age < 10) signifies "NOT less than 10". If a number is not less than 10, it must be greater than or equal to 10 (>=).
Consequently, these two expressions are logically equivalent.

// Task 4
Predicted results:
laptop.brand will print: "Apple"
laptop.spec.ram will print: "16GB"
Because in JavaScript, Objects are reference types. When executing const myLaptop = laptop, myLaptop points to the
same memory address (or reference) as laptop.Therefore, when you modify myLaptop.brand to 'Apple', the original laptop.brand is also updated.

Similarly, mySpec holds a reference to the nested object spec inside laptop. When you modify mySpec.ram to '16GB', it directly
updates the ram property within the laptop object.