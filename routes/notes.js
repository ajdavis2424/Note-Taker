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

// THIS IS THE POST ROUTE FOR SAVING NOTES
notes.post('/', (req, res) => {
    const { title, text } = req.body;
  // new user ID created
    const id = uuid();
    const newNotes = {
        title,
        text,
        id:
      };
    
      readAndAppend(newNotes, './db/db.json');
      res.send(`This note has been saved successfully!!`);
    // } else {
    //   res.error('THERE WAS AN ERROR SAVING THIS NOTE');
    // }
})

// // THIS IS THE POST ROUTE FOR DELETING NOTES
// notes.delete('/:id', async (req, res) => {

//   const { id } = req.params;

//   if (id) {
    
//     const currentNotes = await readFromFile('./db/db.json').then((data) => JSON.parse(data));    
    
//     const updatedNotes = currentNotes.filter(note => note.id !== id);

//     writeToFile('./db/db.json', updatedNotes);
//     res.json('THIS NOTE HAS BEEN DELETED');
//   } else {
//     res.error('ERROR DELETING THIS NOTE');
//   }
// });

// module.exports allow us to use this file elseswhere 
module.exports = notes;