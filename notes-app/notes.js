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

const listNotes = () => {
  const notes = loadNotes();
  if (notes.length > 0) {
    console.log(chalk.white.inverse.bold('Following are all your Notes'));
    notes.forEach((note, index) => {
      console.log(
        `${chalk.white(index + 1 + '.')} Title: ${chalk.white.bold(note.title)}`
      );
      console.log(`${chalk.white(note.body)}`);
    });
  } else {
    console.log(
      `${chalk.red.bold.inverse(
        `No Note saved. Add some using ${chalk.blue.bold.inverse(
          'add'
        )} command `
      )}`
    );
  }
};

const read = (title) => {
  const notes = loadNotes();

  if (notes.length > 0) {
    const noteToOpen = notes.filter((note) => note.title === title);

    if (noteToOpen.length > 0) {
      console.log(`Title: ${chalk.white.bold.inverse(noteToOpen[0].title)}`);
      console.log(`Body: ${chalk.white.inverse(noteToOpen[0].body)}`);
    } else {
      console.log(
        `${chalk.red.bold.inverse(
          ` Note with title ${chalk.white.bold.inverse(title)} does not exist`
        )}`
      );
    }
  } else {
    console.log(
      `${chalk.red.bold.inverse(
        `No Note saved. Add some using ${chalk.blue.bold.inverse(
          'add'
        )} command `
      )}`
    );
  }
};

module.exports = { getNotes, addNote, removeNote, listNotes, read };
