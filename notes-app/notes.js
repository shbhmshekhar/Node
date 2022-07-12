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

module.exports = { getNotes, addNote };
