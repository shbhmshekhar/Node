const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your notes...';
};

const loadNotes = () => {
  try {
    const dataJSON = fs.readFileSync('notes.json').toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJson);
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log(chalk.green.bold('Note sucessfully added!!'));
  } else {
    console.log(chalk.red.bold('Note title already exists'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  if (notes.length > 0) {
    const updatedNotesList = notes.filter((note) => note.title !== title);
    if (notes.length !== updatedNotesList.length) {
      saveNotes(updatedNotesList);
      console.log(chalk.green.inverse.bold('Note sucessfully removed!!'));
    } else {
      console.log(
        chalk.red.inverse(`Note with title ${chalk.bold(title)} does not exist`)
      );
    }
  } else {
    console.log(chalk.red.inverse.bold('No note exists'));
  }
};
module.exports = { getNotes, addNote, removeNote };
