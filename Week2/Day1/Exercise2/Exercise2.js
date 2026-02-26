let rows1 = 6;
let pattern1 = "";

for (let i = 1; i <= rows1; i++) {
  pattern1 += "* ".repeat(i).trim() + "\n";
}

console.log(pattern1);

// Outer loop = rows, inner = stars per row
let rows = 6;
let pattern = "";

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  pattern += "\n";
}

console.log(pattern);