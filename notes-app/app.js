const notes = require('./notes');
const validator = require('validator');

console.log('Notes', notes.getNotes());

console.log(validator.isEmail('abc@test.com'));
