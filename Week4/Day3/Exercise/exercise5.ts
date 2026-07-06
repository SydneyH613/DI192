// exercise5.ts

function getDetails(name: string, age: number): [string, number, string] {
  const message = `Hello, ${name}! You are ${age} years old.`;
  return [name, age, message];
}

// Call the function and log the tuple
const details = getDetails("Alice", 25);
console.log(details);
