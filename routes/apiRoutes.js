// LOAD DATA

var noteArray = require("../db/db.json");

// ROUTING
module.exports = function (app) {

  // API GET Requests


  app.get("/api/notes", function (req, res) {
    res.json(noteArray);
  });
  console.log(noteArray);
  // API POST Requests

  app.post("/api/notes", function (req, res) {
  
  });

  app.delete("/api/notes", function (req, res) {
  });
};