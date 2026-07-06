// ============================================================
// EXERCISE 1 : SCOPE
// ============================================================

// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3; // a is reassigned — still the SAME variable (let is block-scoped,
               // but the if block here shares the function scope for `a`)
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 — Prediction: alert shows "inside the funcOne function 3"
// Reason: `a` starts as 5, the condition (5 > 1) is true, so a is reassigned to 3.
// Since `let` inside an if block without its own declaration still refers to the
// outer `a` declared in the function, the value is 3 when alert runs.
funcOne();

// #1.2 — What if declared with const?
// ANSWER: `const a = 5` would throw a TypeError: Assignment to constant variable.
// You cannot reassign a const. The line `a = 3` would crash immediately.


// ============================================================
// #2
let a = 0; // global `a`

function funcTwo() {
    a = 5; // modifies the GLOBAL `a` — no new declaration, just reassignment
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 — Predictions:
// funcThree() called first  → alert shows "inside the funcThree function 0"
//   Reason: funcTwo hasn't run yet; global `a` is still 0.
// funcTwo() called next     → sets global `a` to 5 (no alert)
// funcThree() called again  → alert shows "inside the funcThree function 5"
//   Reason: funcTwo already changed global `a` to 5.
funcThree(); // → 0
funcTwo();
funcThree(); // → 5

// #2.2 — What if declared with const?
// ANSWER: `const a = 0` at the top level would make `a` read-only.
// funcTwo's line `a = 5` would throw a TypeError: Assignment to constant variable.


// ============================================================
// #3
function funcFour() {
    window.a = "hello"; // explicitly sets a property on the global `window` object
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 — Prediction: alert shows "inside the funcFive function hello"
// Reason: funcFour sets window.a = "hello". In browsers, `window` IS the global scope,
// so accessing bare `a` finds window.a = "hello". funcFive reads that global and alerts it.
funcFour();
funcFive(); // → "hello"


// ============================================================
// #4
let a2 = 1; // renamed to a2 to avoid redeclaration conflict in one file

function funcSix() {
    let a2 = "test"; // a NEW local variable that SHADOWS the outer a2
    alert(`inside the funcSix function ${a2}`);
}

// #4.1 — Prediction: alert shows "inside the funcSix function test"
// Reason: Inside funcSix, `let a2 = "test"` creates a brand-new local variable.
// It SHADOWS (hides) the outer a2 = 1. The outer a2 is untouched.
funcSix(); // → "test"
// After the call, outer a2 is still 1.

// #4.2 — What if declared with const?
// ANSWER: `const a2 = "test"` inside funcSix works perfectly fine.
// You're not reassigning — you're declaring a new const in a new scope.
// Result would be the same: alerts "inside the funcSix function test".


// ============================================================
// #5
let a3 = 2; // renamed to a3 to avoid redeclaration conflict in one file

if (true) {
    let a3 = 5; // NEW block-scoped variable, only lives inside this { } block
    alert(`in the if block ${a3}`); // → 5
}
alert(`outside of the if block ${a3}`); // → 2

// #5.1 — Predictions:
// First alert:  "in the if block 5"
//   Reason: `let` inside the if block creates a NEW variable scoped to that block.
//   It shadows the outer a3 = 2 only inside the braces.
// Second alert: "outside of the if block 2"
//   Reason: Once outside the if block, the inner a3 = 5 is gone.
//   The outer a3 = 2 was never touched.

// #5.2 — What if declared with const?
// ANSWER: `const a3 = 5` inside the if block works just like `let` here.
// const is also block-scoped. The outer a3 = 2 remains unchanged.
// Same output: "in the if block 5", then "outside of the if block 2".