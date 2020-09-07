// Dependencies
//=======================================================

var express = require("express");

// Sets up Express App
//=======================================================
var app = express();
var PORT = process.env.PORT || 3500;

// Set up the Express app to handle data parsing
//=======================================================

app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.use(express.static('public'));

