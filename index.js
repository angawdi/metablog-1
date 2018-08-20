// Require stuff
var express = require('express');

// Declare global variables
var app = express();

// Set and use statements


// Define routes
app.get('/', function(req, res){
  res.send('home page!');
});

// Hey! Listen!
app.listen(3000);
