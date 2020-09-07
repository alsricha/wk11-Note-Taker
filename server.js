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

// Starts the server to begin listening
//=======================================================

app.listen(PORT, function () { 
    console.log("App listening on PORT: " + PORT)
});

//Routes
//========================================================

require("./routes/apiRoutes")(app);
require("./routes/hmtlRoutes")(app);