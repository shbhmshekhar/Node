const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');

//customize app version using yargs
yargs.version('1.1.0');

yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body text',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: 'remove',
  describe: 'remove a  note',
  handler: function () {
    console.log('Removing note');
  },
});
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: function () {
    console.log('Listing all notes');
  },
});
yargs.command({
  command: 'read',
  describe: 'Reading a selected note',
  handler: function () {
    console.log('opening note to read');
  },
});
yargs.parse();
// console.log(yargs.argv);
