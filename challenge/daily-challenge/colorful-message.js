// Task 2: Using an NPM Module
// Using chalk to create colorful messages

const chalk = require('chalk');

function displayColorfulMessage() {
  console.log(chalk.blue.bold('\n=== Colorful Message ==='));
  console.log(chalk.green('This is a green message'));
  console.log(chalk.red('This is a red message'));
  console.log(chalk.yellow('This is a yellow message'));
  console.log(chalk.blue('This is a blue message'));
  console.log(chalk.magenta('This is a magenta message'));
  console.log(chalk.cyan.bold('\nColorful messages are awesome! 🎨\n'));
}

module.exports = displayColorfulMessage;
