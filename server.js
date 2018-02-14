// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure the Express application
var app = express();
var PORT = process.env.PORT;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, './routing/api-Routes'))(app);
require(path.join(__dirname, './routing/html-Routes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('FriendFinder app is listening on PORT: ' + PORT);
});
