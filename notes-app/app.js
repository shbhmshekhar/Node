const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');

//customize app version using yargs
yargs.version('1.1.0');

// const command = process.argv[2];

// switch (command) {
//   case 'add':
//     console.log('Adding note');
//     break;
//   case 'remove':
//     console.log('Removing note');
//     break;
// }

// console.log(process.argv);

yargs.command({
  command: 'add',
  describe: 'add a new note',
  handler: function () {
    console.log('Add a new note');
  },
});
