const notes = require('./notes');
const validator = require('validator');
const chalk = require('chalk');

console.log('Notes', notes.getNotes());

console.log(validator.isEmail('abc@test.com'));
console.log(chalk.green.bold.inverse('success!!'));
