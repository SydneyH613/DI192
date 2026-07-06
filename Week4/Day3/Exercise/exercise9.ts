// Function overload signatures
function greet(): string;
function greet(name: string): string;

// Function implementation
function greet(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return "Hello, there!";
  }
}

// Test the function
console.log(greet("Alice")); // Hello, Alice!
console.log(greet());        // Hello, there!
