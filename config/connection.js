var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: process.env.PORT || 3306,
    user: "rwdakged7dmbfzp8",
    password: "vvoihbv5mon1mx36",
    database: "vyechzguoac7v66k",
    use_env_variable: "JAWS_DB_URL"
  });
};

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;