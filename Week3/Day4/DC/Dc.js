// Function to check if two strings are anagrams
function isAnagram(str1, str2) {
  function normalize(str) {
    return str
      .toLowerCase()              // ignore case
      .replace(/[^a-z0-9]/g, '')  // remove spaces & punctuation
      .split('')
      .sort()
      .join('');
  }

  return normalize(str1) === normalize(str2);
}


// ===== Test examples =====
console.log(isAnagram("Astronomer", "Moon starer"));      // true
console.log(isAnagram("School master", "The classroom")); // true
console.log(isAnagram("The Morse Code", "Here come dots"));// true
console.log(isAnagram("Hello", "World"));                 // false


// ===== Optional: Prompt user (works in browser) =====
const input1 = prompt("Enter first string:");
const input2 = prompt("Enter second string:");

const result = isAnagram(input1, input2);

if (result) {
  alert("These are anagrams ✅");
} else {
  alert("Not anagrams ❌");
}
