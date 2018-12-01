// Dependencies
var express = require("express");

var app = require("express");

var app = express();
var PORT = process.env.PORT || 8089;

var db = require("./models");
var textMessage = require("./send_sms");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync({}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
    console.log('After job instantiation');
    // textMessage.job.start();

  });
});