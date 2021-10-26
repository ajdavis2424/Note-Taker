const notes = require('express').Router();
const fs = require('fs');

// This brings in helper fsUtilsfor reading and appending to .=db.json file, may add delete
const { readFromFile, readAndAppend,} = require('../helpers/fsUtils');

// This will bring in uuid module to create "unique" user id
const uuid = require('../helpers/uuid');

// THIS IS THE GET ROUTE FOR SAVED NOTED
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.get('/:note_id', (req, res) => {
  const noteId = req.params.note_id;
readFromFile('./db/db.json')
  .then((data) => JSON.parse(data))
  .then((json) => {
      console.log(json);
    const result = json.filter((note) => note.note_id === noteId);
    return result.length > 0
      ? res.json(result)
      : res.json('No Note with that ID');
  });
});

notes.post('/', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body){
      const newNote = {
          title,
          text,
          note_id: uuidv4(),
      };

      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully 🚀`);
  } else {
      res.error('Error in adding Note');
  }
});
module.exports = notes;