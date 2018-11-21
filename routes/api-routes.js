var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/user", function(req, res) {
    db.User.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
  //Get one user by id
  app.get("/api/user/:id", function(req, res) {
    db.User.findAll({ where: { id: req.params.id } }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new user
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

};
