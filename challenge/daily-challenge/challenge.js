// Challenge Task: Integrating Everything
// This file demonstrates the complete daily challenge by integrating all modules

const greet = require('./greeting');
const displayColorfulMessage = require('./colorful-message');
const readAndDisplayFile = require('./read-file');

console.log('\n');
console.log('╔════════════════════════════════════════════════════════════╗');
console.log('║     DAILY CHALLENGE: Node.js Modules & File Operations    ║');
console.log('╚════════════════════════════════════════════════════════════╝');

// Part 1: Using the greeting module
console.log('\n📌 PART 1: Basic Module System (greeting.js)');
console.log('-'.repeat(60));
console.log(greet('Daily Challenge User'));

// Part 2: Using the chalk NPM module
console.log('📌 PART 2: NPM Module Integration (colorful-message.js)');
console.log('-'.repeat(60));
displayColorfulMessage();

// Part 3: Advanced file operations
console.log('📌 PART 3: File Operations (read-file.js)');
console.log('-'.repeat(60));
readAndDisplayFile();

console.log('╔════════════════════════════════════════════════════════════╗');
console.log('║             🎉 Challenge Complete! Well Done! 🎉          ║');
console.log('╚════════════════════════════════════════════════════════════╝');
console.log('\n');
