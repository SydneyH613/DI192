// ============================================================
// EXERCISE 2 : TERNARY OPERATOR
// ============================================================

// Original function transformed to an arrow function:
const winBattle = () => true;

// experiencePoints uses a ternary: condition ? valueIfTrue : valueIfFalse
const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints); // → 10  (because winBattle() returns true)


// ============================================================
// EXERCISE 3 : IS IT A STRING?
// ============================================================

// typeof returns the type of a value as a string.
// We compare it to "string" and return true or false.
const isString = (value) => typeof value === "string";

console.log(isString("hello"));      // → true
console.log(isString([1, 2, 4, 0])); // → false
console.log(isString(42));           // → false
console.log(isString(true));         // → false


// ============================================================
// EXERCISE 4 : FIND THE SUM
// ============================================================

// One-line arrow function — implicit return (no curly braces needed)
const sum = (a, b) => a + b;

console.log(sum(3, 7));   // → 10
console.log(sum(15, 25)); // → 40


// ============================================================
// EXERCISE 5 : KG AND GRAMS
// ============================================================

// --- Function Declaration ---
// Hoisted: can be called BEFORE it appears in the code.
function kgToGramsDeclared(kg) {
    return kg * 1000;
}
console.log(kgToGramsDeclared(2.5)); // → 2500

// --- Function Expression ---
// NOT hoisted: cannot be called before this line.
const kgToGramsExpression = function(kg) {
    return kg * 1000;
};
console.log(kgToGramsExpression(2.5)); // → 2500

// Difference: function declarations are hoisted (available throughout the scope),
// function expressions are not hoisted (only usable after the line they are defined on).

// --- Arrow Function (one-liner) ---
const kgToGrams = (kg) => kg * 1000;

console.log(kgToGrams(2.5)); // → 2500