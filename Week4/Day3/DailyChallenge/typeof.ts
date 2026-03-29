function validateUnionType(value: any, allowedTypes: string[]): boolean {
  // Get the type of the value
  const valueType = typeof value;
  // Check if the value type is included in allowedTypes
  return allowedTypes.includes(valueType);
}

// Example usage:

const age = 25;
const name = "Alice";
const isActive = true;
const data = { key: "value" };

console.log(validateUnionType(age, ["number", "string"]));       // true
console.log(validateUnionType(name, ["number"]));                // false
console.log(validateUnionType(isActive, ["boolean"]));           // true
console.log(validateUnionType(data, ["object", "string"]));      // true
console.log(validateUnionType(data, ["string", "number"]));      // false
