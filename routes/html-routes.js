// Dependencies
var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user.html"));
  });

  app.get("/:id/entry", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/entry.html"));
  });
};
