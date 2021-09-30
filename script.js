// installed: npm init
// npm express --save
// npm install ejs --save  (acts as html file for app)
// npm install body-parser --save (parses incoming/user requests in middleware befroe handlers)

// Require installed modules 

// Declare installed frameworks
const express = require('express');
const bodyParser = require('body-parser');

// Call the express and body parser
let app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

// SERVING STATIC FILES
app.use(express.static('public'));
// installed ejs & created file inside js folder
app.set('view engine', 'ejs')

//HERE WE SET UP ROUTE FOR THE APP VIA APP.GET OPTION
app.get('/', function (req, res) {
    res.render('notes', {
      note: note
    });
  });
  


app.listen(5000, function(){
    console.log("NoteTaker App server is running at port 5000...");
});


