// Connect routes to notes data.
var noteData = require("../data/notes");

// Routing
module.exports = function (app) {

  // GET request
  app.get("/api/note", function (req, res) {
    res.json(noteData);
  });

  // POST request
  app.post("/api/note", function (req, res) {
    noteData.push(req.body);
    res.json("saved");
  });

  // DELETE request
  app.delete("/api/note/:index", function (req, res) {
    var elem = parseInt(req.params.index);
    var tempnotes = [];
    for (var i = 0; i < noteData.length; i++) {
      if (i !== elem) {
        tempnotes.push(noteData[i]);
      }
    }
    noteData = tempnotes;

    res.json("delete completed");
  });
}