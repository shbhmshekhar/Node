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
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: 'remove',
  describe: 'remove a  note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: () => {
    notes.listNotes();
  },
});
yargs.command({
  command: 'read',
  describe: 'Reading a selected note',
  handler: (argv) => {
    notes.read(argv.title);
  },
});
yargs.parse();
// console.log(yargs.argv);
