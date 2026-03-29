// Generic function with constraint
function formatInput<T extends { toString(): string }>(input: T): string {
  // Use type assertion to treat input as a string
  const strInput = input.toString() as string;

  // Example formatting: wrap in quotes and trim whitespace
  return `"${strInput.trim()}"`;
}

// Test cases
console.log(formatInput(123));           // Output: "123"
console.log(formatInput("  hello  "));   // Output: "hello"
console.log(formatInput(true));          // Output: "true"
console.log(formatInput({ toString: () => "custom object" })); // Output: "custom object"
