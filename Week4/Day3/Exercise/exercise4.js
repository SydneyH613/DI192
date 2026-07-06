"use strict";
// exercise4.ts
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    }
    else if (num < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
}
// Test it
console.log(checkNumber(5)); // Positive
console.log(checkNumber(-3)); // Negative
console.log(checkNumber(0)); // Zero
