// Generic function with constraint
function logLength<T extends { length: number }>(item: T): void {
  console.log("Length:", item.length);
}

// Test with a string
logLength("Hello World"); // Output: Length: 11

// Test with an array
logLength([1, 2, 3, 4, 5]); // Output: Length: 5

// Test with another type that has length
logLength({ length: 10, value: "something" }); // Output: Length: 10

// The following would cause an error because number has no length
// logLength(123); // ❌ Error
