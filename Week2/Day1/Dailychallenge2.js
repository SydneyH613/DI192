let pattern = "";
let rows = 6; // Number of rows

for (let i = 1; i <= rows; i++) {
  // Repeat "*" i times and add a space
  pattern = "* ".repeat(i);
  console.log(pattern.trim()); // trim to remove trailing space
}


let rowsnumber = 6;

for (let i = 1; i <= rows; i++) {       // Outer loop: controls rows
  let row = "";
  for (let j = 1; j <= i; j++) {        // Inner loop: controls stars in each row
    row += "* ";
  }
  console.log(row.trim());               // Print the row
}
