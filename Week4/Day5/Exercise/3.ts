// Step 1: Create a variable of type any
let someValue: any = 12345;

// Step 2: Cast it to a string
let strValue: string = someValue as string;

// Step 3: Use it as a string
console.log("The string value is: " + strValue);
console.log("Length of string:", strValue.length);
