// Function that accepts number | string
function describeValue(value: number | string): string {
  if (typeof value === "number") {
    return "This is a number";
  } else if (typeof value === "string") {
    return "This is a string";
  } else {
    return "Unknown type"; // Just for safety, though TS knows it's number | string
  }
}

// Examples:
console.log(describeValue(42));        // Output: "This is a number"
console.log(describeValue("hello"));   // Output: "This is a string"
