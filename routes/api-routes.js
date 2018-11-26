var db = require("../models");

module.exports = function (app) {
  // Get all users
  app.get("/api/user", function (req, res) {
    db.User.findAll({})
      .then(function (dbUsers) {
        res.json(dbUsers);
      });
  });
  //Get one user by id
  app.get("/api/user/:id", function (req, res) {
    db.User.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbUsers) {
        res.json(dbUsers);
      });
  });

  // Create a new user
  app.post("/api/user", function (req, res) {
    db.User.create({
      user_name: req.body.user_name,
      person_name: req.body.person_name,
      phone_number: req.body.phone_number
    })
      .then(function (dbUsers) {
        res.json(dbUsers);
      });
  });

  // Get all check-ins
  app.get("/api/checkin", function (req, res) {
    db.CheckIn.findAll({})
      .then(function (dbCheckIns) {
        res.json(dbCheckIns);
      });
  });
  
  // DBS - the below causes problems because ~/checkin/:id and ~checkin/:UserId seem the same to the routes file.

  //Get one check-in by id 
  // app.get("/api/checkin/:id", function (req, res) {
  //   db.CheckIn.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function (dbCheckIns) {
  //       res.json(dbCheckIns);
  //     });
  // });
  //Get all checkins by user_id
  app.get("/api/checkin/:UserId", function (req, res) {
    db.CheckIn.findAll({
      where: {

        UserId: req.params.UserId

      }
    }).
      then(function (dbCheckIns) {
        res.json(dbCheckIns);
      });
  });
  // Create a new check-in
  app.post("/api/checkin", function (req, res) {
    db.CheckIn.create({
      UserId: req.body.UserId,
      sleep_quality: req.body.sleep_quality,
      sleep_amount: req.body.sleep_amount,
      mood_rating: req.body.mood_rating,
      mood_type: req.body.mood_type,
      diet_quality: req.body.diet_quality,
      stress_level: req.body.stress_level,
      user_entry: req.body.user_entry
    })
      .then(function (dbCheckIns) {
        res.json(dbCheckIns);
      });
  });

};
