// installed: npm init
// npm express --save
// npm install ejs --save  (acts as html file for app)
// npm install body-parser --save (parses incoming/user requests in middleware befroe handlers)

// Require installed modules 

// Declare installed frameworks to build server
const express = require('express');
// const bodyParser = require('body-parser');
const apiRoutes = require('./routes/notes.js');
const routesHtml = ('./routes/notes.js');
const {clog} = require('./middleware/clog')

// Initialize express w/const app = express();--- creates port!
const app = express();

app.use(clog)

// Created PORT variable for server to listen on (localhost:5000)
const PORT = process.env.PORT || 5000;

// NO LONGER NEED  Call the express and body parser
// let app = express();
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// SERVING STATIC FILES w/MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static('public'))

// This should connect my server.js file to the routes created
app.use('/api', apiRoutes)
app.use('/',routesHtml)


// NO LONGER NEEDED---installed ejs & created file inside js folder
// app.set('view engine', 'ejs')

//HERE WE SET UP ROUTE FOR THE APP VIA APP.GET OPTION ----INDEX
// app.get('/', (req, res) => 
//     res.sendFile(path.join(__dirname, '/public/assets/index.html')));
  

// //HERE WE SET UP ROUTE FOR THE APP VIA APP.GET OPTION ----NOTES
// app.get('/notes', (req, res) => 
//     res.sendFile(path.join(__dirname, '/public/assets/index.html')));

// line 17 POST variable was created
    app.listen(PORT,() => 
        console.log(`NoteTaker App server is running at localhost:${PORT}`));

//     //then, we use app.post option.
// app.post("/addNotes", function (req, res) {
//   //assigning Note id to the notes using math.random
//   const userNote = {};
//   userNote.id = Math.random() * 100;
//   userNote.body = req.body.newNote
//   note.push(userNote);
//   //then we redirect it to the root route
//   res.redirect('/');
// });

// //Handling the delete request
// app.post('/deleteNote/:id', function (req, res) {
//   console.log(req.params.id);
//   const deleteNotes = note.filter(item => item.id != req.params.id);
//   note = deleteNotes;
//   return res.redirect('/');
// });
