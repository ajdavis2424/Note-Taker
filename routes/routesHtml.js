// const express = require('express');
const path = require('path');
const router = require('express').Router();

// FUll SCRAP
// '/notes/ responds with the notes.html file via bootcamp starter code
router.get('/notes', (req, res) => {
  
    //this finds the path
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

// This allows new routes file to be exported
module.exports = router;