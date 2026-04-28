// Task 3: Advanced File Operations
// Read and display file content using the fs module

const fs = require('fs');
const path = require('path');

function readAndDisplayFile() {
  const filePath = path.join(__dirname, 'files', 'file-data.txt');
  
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    console.log('\n=== File Content ===');
    console.log(fileContent);
    console.log('===================\n');
  } catch (error) {
    console.error('Error reading file:', error.message);
  }
}

module.exports = readAndDisplayFile;
