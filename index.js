// Require stuff
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var express = require('express');

// Declare global variables
var app = express();

// Set and use statements
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));

// Include controllers/routers
app.use('/articles', require('./controllers/articles'));
app.use('/authors', require('./controllers/authors'));

// Define routes
app.get('/', function(req, res){
  res.render('home');
});

// Hey! Listen!
app.listen(3000);
