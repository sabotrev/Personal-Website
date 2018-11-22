const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'src')));

app.listen(8000, function() {
  console.log('Application started on port 8000');
});