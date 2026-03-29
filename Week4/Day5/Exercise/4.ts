class Calculator {
  // Static method to add two numbers
  static add(a: number, b: number): number {
    return a + b;
  }

  // Static method to subtract two numbers
  static subtract(a: number, b: number): number {
    return a - b;
  }
}

// Example usage: call static methods without creating an instance
console.log(Calculator.add(10, 5));      // 15
console.log(Calculator.subtract(10, 5)); // 5

// ❌ Cannot access static methods via instance
// const calc = new Calculator();
// console.log(calc.add(10, 5)); // Error: Property 'add' does not exist on type 'Calculator'
