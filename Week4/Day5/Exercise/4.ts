// Function that takes an array of number | string
function getFirstElement(arr: (number | string)[]): string {
  // Get the first element
  const first = arr[0];

  // Use type assertion to treat it as a string
  return first as string;
}

// Test cases
const arr1 = [42, "hello", 100];
const arr2 = ["world", 123, "test"];

console.log(getFirstElement(arr1)); // Output: 42 (as string)
console.log(getFirstElement(arr2)); // Output: "world"
